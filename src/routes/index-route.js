'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: process.env._APP_PROJECT_NAME,
        version: process.env._APP_PROJECT_VERSION
    });
});

module.exports = router;
module.change_code = 1;
