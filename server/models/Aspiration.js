const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateformat')

const aspirationSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true,
            required: true
        },
        date: {
            type: String,
            trim: true,

        },
        img: {
            type: String,
            trim: true,

        },
        categories: {
            type: String,
            trim: true,
            required: true

        },
        priority: {
            type: String,
            trim: true,
            required: true

        },
        genre: {
            type: String,
            trim: true,

        },
        areaOfFocus: {
            type: String,
            trim: true,

        },
        diet: {
            type: String,
            trim: true,

        },
        region: {
            type: String,
            trim: true,

        },
        whatArticle: {
            type: String,
            trim: true,

        },
        isComplete: {
            type: String,
            trim: true,

        },
    }
)
const Aspiration = model('Aspiration', aspirationSchema);
module.exports = Aspiration;