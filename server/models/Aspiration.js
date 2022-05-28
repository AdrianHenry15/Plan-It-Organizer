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
        category: {
            type: String,
            trim: true,
            required: true
        },
        date: {
            type: String,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        img: {
            type: String,
            trim: true,

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
            type: Boolean,
        }
    }
)
const Aspiration = model('Aspiration', aspirationSchema);
module.exports = Aspiration;