'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    fiatBalance: {
        type: Number,
        required: false,
        default: 0
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }],
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    phone_validated: {
        type: Boolean,
        required: true,
        default: false
    },
    email_validated: {
        type: Boolean,
        required: true,
        default: false
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    modified: {
        type: Date,
        required: true,
        default: Date.now
    },
    ip_address: {
        type: String,
        required: true
    },
    user_agent: {
        type: String,
        required: true
    },
    api_key: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', schema);
