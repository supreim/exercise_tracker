const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();
const mongoose = require('mongoose');

const Model = require('./api/connect');

const apiRouter = require('./api/api');

const app = express();

mongoose.connect(process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(bodyParser.json());
app.use(morgan('common'));
app.use(helmet());



app.get('/api', apiRouter);

app.post('/api/add', async (req, res, next) => {
    try {
        data = req.body;
        await Model.create(data);
        res.send(data);
    } catch (error) {
        next(error);
    }
})


app.get('/', (req, res, next) => {
    error = new Error("Page Not Found");
    res.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.json({
        "error": error.message,
        stack: process.env.NODE_ENV === 'production' ? "❤" : error.stack
    });
});


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log('failed to connect...', err);
        return new Error('failed to connect...');
    }
    console.log(`listening on http://localhost:${process.env.PORT}`);


});