'use strict'

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
require('dotenv/config');
const hotswap = require('hotswap');

mongoose.connect(process.env._APP_CONNECTION_STRING);

//load models
const User = require('./models/user');
const Wallet = require('./models/wallet');

//load routes
const indexRoute = require('./routes/index-route');
const userRoute = require('./routes/user-route');
/*
const appsRoute = require('./routes/applications');
const baremetal = require('./routes/baremetal');
const billing = require('./routes/billing');
const dns = require('./routes/dns');
const cloud = require('./routes/cloud');
const pricing = require('./routes/pricing');
const regions = require('./routes/regions');
const ssh = require('./routes/ssh');
const support = require('./routes/support');
*/

app.use(express.json())

hotswap.on('swap', function(file) {
  // we are going to console.log(test) whenever it's changed
  console.log(`hotswapping file ${file}`);
});

// Enable CORS ()
if(process.env._APP_MODE == 'development') {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    });
}

// verify if hotswapping still works after loaded
app.use('/', indexRoute);
app.use('/users', userRoute);
/*
app.use('/apps', appsRoute);
app.use('/baremetal', baremetal);
app.use('/billing', billing);
app.use('/dns', dns);
app.use('/cloud', cloud);
app.use('/pricing', pricing);
app.use('/regions', regions);
app.use('/ssh', ssh);
app.use('/support', support);
*/

app.listen(3000);
