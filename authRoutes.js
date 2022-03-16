const express = require("express")
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const { v4: uuidv4 } = require('uuid')

MongoClient.connect(process.env.MONGODB_STRING, function(err, client) {
    if (err) throw err

    var db = client.db('bmi')
    var usersCollection = db.collection('users')

    router.route('/lookup').post((req, res, next) => {
        let serialNumber = req.body.serialNumber
        let message = {}
        usersCollection.findOne({
            serialNumber
        }, function (err, result) {
            if (err) throw err

            if (result) {
                message = {
                    status: '200',
                    ...result
                }
                return res.send(message)
            } else {
                message = {
                    status: '404',
                    ...result
                }
                return res.send(message)
            }
        })
        return {
            "repsonse": "response"
        }
    })

    router.route('/register').post((req, res, next) => {
        let serialNumber = uuidv4()
        let message = {}
        // usersCollection.insertOne({
        //     'serialNumber': serialNumber,
        //     'email': '',
        //     'faction': ''
        // }, function(err, result) {
        //     if (err) throw err
        message = {
            status: '200',
            serialNumber: serialNumber
        }
        return res.send(message)
        // })
    })

    router.route('/link').post((req, res, next) => {
        let serialNumber = req.body.serialNumber
        let email = req.body.email
        usersCollection.findOne({
            'email': email
        }, function(err, result) {
            // Email already in system. Supplicate account.
            if (result) {
                message = {
                    status: '403',
                    error: 'ERROR. EMAIL ALREADY EXISTS.'
                }
                return res.send(message)
            // New email, link account.
            } else {
                usersCollection.insertOne({
                    'serialNumber': serialNumber,
                    'email': email
                }, function(err, result) {
                    if (err) throw err
                    message = {
                        status: '200',
                        ...result
                    }
                    return res.send(message)
                })
            }
        })
    })

    router.route('/code-gen').post((req, res, next) => {
        console.log(req.body)
    })

    router.route('/unlock').post((req, res, next) => {
        let answer = req.body.answer
        let unlock = process.env.UNLOCK
        let response = {}
        if (answer === unlock) {
            response = {
                status: '200', 
                slug: process.env.SLUG_STEM
            }
        } else {
            Response = {
                status: '403',
                error: 'INCORRECT. ACCESS TO REQUESTED RESOURCE IS FORBIDDEN.'
            }
        }
        return res.send(response)
    })
})

module.exports = router