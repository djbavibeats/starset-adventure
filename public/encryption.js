console.log('Encryption logger loaded!')

$(function() {
    $('#terminal').terminal({
        init: function() {
            this.echo('Hello. \n\nThank you for your participation in the BMI Beta \nVersion 2.0 test.\n')
            this.echo('To access your personal drive please enter the \nserial number you received upon initializing \nyour device:\n ')
            this.push(function(serial_number) {  
                let serialNumber = {
                    serialNumber: serial_number
                }
                // Lookup Serial Number
                fetch('/auth/lookup', {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(serialNumber)
                }).then(resp => {
                    resp.json().then(data => {
                        // If user is found, prompt for email
                        if (data.status === '200') {
                            this.echo('\nSerial Number found. Please enter matching email \nto authenticate.')
                            this.push(function(email) {
                                this.echo(`\nQEVAX LBHE BINYGVAR`)
                                this.echo(`\nDo you have the answers yet?\n`)
                                this.push(function(answer) {
                                    let lowerCaseAnswer = answer.toLowerCase()
                                    let body = {
                                        answer: lowerCaseAnswer
                                    }
                                    fetch('/auth/unlock', {
                                        method: 'POST',
                                        mode: 'cors',
                                        cache: 'no-cache',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }, 
                                        body: JSON.stringify(body)
                                    }).then(resp => {
                                        resp.json().then(data => {
                                            this.clear()
                                            if (data.status !== '200') {
                                                this.echo('\n[[;red;]ERROR. INCORRECT CODE. PREPARING TO BOOT USER.').pop().pop().pop()
                                                setTimeout(() => {
                                                    setTimeout(() => {
                                                        let slug = window.location.hostname
                                                        
                                                        window.location.replace('https://' + slug + '/space')
                                                    }, 1000)
                                                }, 1000)
                                            } else {
                                                let url = data.slug
                                                this.echo(`\n[[;green;]SUCCESS. THANK YOU. \n\nPLEASE STORE THIS CODE IN A SECURE LOCATION \nAND AWAIT FURTHER INSTRUCTIONS. \n\nENTER COMMAND starset TO PROCEED. \n`).pop()
                                                this.push(function(cmd) {
                                                    if (cmd !== 'starset') {
                                                        this.echo('Unknown command ' + cmd + '. Please enter a valid response.\n')
                                                    } else {
                                                        this.echo('\nTHANK YOU. ENJOY.')
                                                        window.open(url, '_blank');
                                                    }
                                                }, {
                                                    prompt: ''
                                                })
                                            }
                                        })
                                    })
                                }, {
                                    prompt: '> [[;blue;]INPUT REQUESTED: '
                                })
                            }, {
                                prompt: '> Email: '
                            })
                        // If user is not found, ask to issue new serial number
                        } else if (data.status === '404') {
                            this.echo('User not found. Issue new serial number?\n')
                            this.push(function(cmd) {
                                console.log(cmd)
                                if (cmd !== 'y' && cmd !== 'Y' && cmd !== 'n' && cmd !== 'N') {
                                    this.echo('Unknown command ' + cmd + '. Please enter a valid response.\n')
                                } else {
                                    if (cmd === 'Y' || cmd === 'y') {
                                        this.clear()
                                        fetch('/auth/register', {
                                            method: 'POST',
                                            mode: 'cors',
                                            cache: 'no-cache',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }
                                        }).then(resp => {
                                            resp.json().then(data => {
                                                if (data.status === '200') {
                                                    this.echo('Serial Number ' + data.serialNumber + ' succesfully generated.\n\n[[;red;]!IMPORTANT!\nWRITE DOWN YOUR SERIAL NUMBER IMMEDIATELY.\nLOST SERIAL NUMBERS WILL RESULT IN SUPPLICATION.\nSHARED SERIAL NUMBER WILL RESULT IN SUPPLICATION.\nWRITE DOWN YOUR SERIAL NUMBER IMMEDIATELY.\n!IMPORTANT!]\n\nPlease enter your email to save your progress \nand link you account. \n')
                                                    
                                                    this.push(function(email) {
                                                        let request = {
                                                            serialNumber: data.serialNumber,
                                                            email: email
                                                        }

                                                        fetch('/auth/link', {
                                                            method: 'POST',
                                                            mode: 'cors',
                                                            cache: 'no-cache',
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            },
                                                            body: JSON.stringify(request)
                                                        }).then(resp => {
                                                            resp.json().then(data => {
                                                            
                                                                if (data.status === '200') {
                                                                    let mailchimpRequest = {
                                                                        email: request.email,
                                                                        bmi_serial_number: request.serialNumber
                                                                    }
                                                                    fetch('/mailchimp/add-member', {
                                                                        method: 'POST',
                                                                        mode: 'cors',
                                                                        cache: 'no-cache',
                                                                        headers: {
                                                                            'Content-Type': 'application/json'
                                                                        },
                                                                        body: JSON.stringify(mailchimpRequest)
                                                                    }).then(resp => {
                                                                        resp.json().then(data => {
                                                                            console.log(data)
                                                                            if (data.status == 400) {
                                                                                return fetch('/mailchimp/update-member', {
                                                                                    method: 'POST',
                                                                                    mode: 'cors',
                                                                                    cache: 'no-cache',
                                                                                    headers: {
                                                                                        'Content-Type': 'application/json'
                                                                                    },
                                                                                    body: JSON.stringify(mailchimpRequest)
                                                                                })
                                                                            } else {
                                                                               return console.log('new user') 
                                                                               
                                                                            }
                                                                        })
                                                                    })
                                                                    this.echo(`Account successfully linked...\nPlease enter command 'help' to begin onboarding. \n`)
                                                                   
                                                                    this.push(function(cmd) {
                                                                        let video = document.getElementById('onboarding')
                                                                        let modal = document.getElementById('onboarding-modal-wrapper')
                                                                        if (cmd !== 'help') {
                                                                            this.echo('Unknown command ' + cmd + '. Please enter a valid response.\n')
                                                                        } else {
                                                                            modal.style.opacity = 1
                                                                            modal.style.display = 'flex'
                                                                            video.addEventListener('ended', () => {
                                                                                modal.style.opacity = 0
                                                                                modal.style.display = 'none'
                                                                            })
                                                                            setTimeout(() => {
                                                                                video.play()
                                                                                this.echo(`Thank you for watching.`)
                                                                                this.echo(`\nQEVAX LBHE BINYGVAR`)
                                                                                this.echo(`\nDo you have the answers?\n`)
                                                                                this.push(function(answer) {
                                                                                    if (answer !== 'correct') {
                                                                                        this.echo('\n[[;red;]ERROR. INCORRECT CODE. PREPARING TO BOOT USER.').pop().pop().pop().pop().pop()
                                                                                        setTimeout(() => {
                                                                                            let slug = window.location.hostname
                                                                                            
                                                                                            window.location.replace('https://' + slug + '/space')
                                                                                        }, 1000)
                                                                                    }
                                                                                }, {
                                                                                    prompt: '> [[;blue;]INPUT REQUESTED: '
                                                                                })
                                                                            }, 2500)
                                                                        }
                                                                        
                                                                    }, {
                                                                        prompt: '> '
                                                                    })
                                                                } else if (data.status === '403') {
                                                                    this.echo('\n[[;red;]ERROR. PREVIOUS ACCOUNT DETECTED. BOOTING USER.\nINTIALIZE SUPPLICATION PROCESS.]\n').pop().pop().pop()
                                                                }
                                                            })
                                                        })
                                                    }, {
                                                        prompt: '> Email: '
                                                    })
                                                } else {
                                                    this.echo('ERROR. Please try again later.')
                                                }
                                            })
                                        })
                                    } else {
                                        this.echo('Access denied. Aborting sequence.\n').pop().pop()
                                    }
                                }
                            }, {
                                prompt: '> (Y/N) '
                            })
                        }
                    })
                })
            }, {
                prompt: '> [[;blue;]BMI#'
            })
        }
    },  {   
        greetings: 'BMI BETA VERSION 2.0.0 DEVICE REGISTRATION \nEnter command init to begin\n'
    }, {
        onBlur: function() {
            return false;
        }
    })
})
