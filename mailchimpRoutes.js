const express = require("express");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const { map } = require("bluebird");
const MailchimpClient = require("@mailchimp/mailchimp_marketing");
const crypto = require('crypto')
const fetch = require('node-fetch');

const router = express.Router();

MailchimpClient.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX
  });
  
router.route("/add-member").post((req, res, next) => {
    res.set('Content-Type', 'application/json');
    MailchimpClient.lists.addListMember("6ad68f1bc1", {
          email_address: req.body.email,
          status: "subscribed",
          tags: [
              req.body.bmi_serial_number,
              "BMI_SERIAL_NUMBER"
          ]
    }).then(result => {
        return res.send(result)
    })
    .catch(err => {
        let message = {
            status: 400,
            error: err,
            body: req.body
        }
        return res.send(message);
    });

})

router.route("/check-member").post((req, res, next) => {
    res.set('Content-Type', 'application/json');
    return MailchimpClient.lists.getListMembersInfo("6ad68f1bc1")
        .then(resp => {
            return res.send(resp)
        })
    .catch(err => { return err });
})

router.route("/update-member").post(async (req, res, next) => {
    
    let hash = crypto.createHash('md5').update(req.body.email).digest("hex");

    var raw = JSON.stringify({
        "tags": [
          {
            "name": `${req.body.bmi_serial_number}`,
            "status": "active"
          }, 
          {
            "name": "BMI_SERIAL_NUMBER",
            "status": "active"
          }
        ]
      });

    var requestOptions = {
        method: 'POST',
        headers: {
            "Authorization": `Basic ${process.env.BEARER_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: raw,
        redirect: 'follow'
    };
      

    fetch(`https://us7.api.mailchimp.com/3.0/lists/6ad68f1bc1/members/${hash}/tags`, requestOptions)
        .then(response => response.text())
        .then(result => { 
            return res.send(result);
        })
    .catch(error => { return res.send(error) });
    
})

module.exports = router;