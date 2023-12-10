'use strict'

const config = require('../config');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});

exports.send = (to, subject, text, html) =>
    const domain = 'cryptfire.io';
    const message = {
        from: 'Cryptfire Team <team@cryptfire.io>',
        to: to,
        subject: subject,
        text: text,
        html: html,
        'o:tag': 'cryptwrite-sdk'
    };
    const result = await Mailgun.sendMessage(domain, message);
    console.log(result);
};
