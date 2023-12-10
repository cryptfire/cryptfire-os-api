'use strict'

const client = require('twilio')(process.env._APP_TWILIO_ACCOUNT_SID, process.env._APP_TWILIO_AUTH_TOKEN);
require('dotenv/config');

exports.send_sms = async (to, message) => {
  client.messages
    .create({
      body: message,
      to: to,
      from: '+12345678901', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
};
