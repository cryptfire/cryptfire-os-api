'use strict'

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.send = (to, message) =>
  client.messages
    .create({
      body: message,
      to: to,
      from: '+12345678901', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
};
