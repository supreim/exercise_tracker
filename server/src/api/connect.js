const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredNumber = {
    type: Number,
    required: true
};

const exerciseSchema = new Schema({
    exercise: {
        type: String,
        required: true
    },
    reps: requiredNumber,
    sets: requiredNumber,
    timeTaken: String,
    comment: String,
    rating: {
        type: Number,
        min: 0,
        max: 10
    }
}, {
    timestamps: true
});

const exerciseModel = mongoose.model('data', exerciseSchema);

module.exports = exerciseModel;
