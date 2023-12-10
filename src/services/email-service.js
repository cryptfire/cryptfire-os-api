'use strict'

const formData = require('form-data');
const Mailgun = require('mailgun.js');
require('dotenv/config');

const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env._APP_MAILGUN_API_KEY});

exports.send_email = async (to, subject, text, html) => {
    const domain = 'cryptfire.io';
    const message = {
        from: 'Cryptfire Team <team@cryptfire.io>',
        to: to,
        subject: subject,
        text: text,
        html: html,
        'o:tag': 'cryptwrite-sdk'
    };
    const result = await mg.messages.create(domain, message);
    console.log(result);
};
