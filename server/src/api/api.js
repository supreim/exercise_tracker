const Model = require('./connect');
const mongoose = require('mongoose');

const express = require('express');

const router = express.Router();

router.use('/', async (req, res, next) => {
    try {
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;