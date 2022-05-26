const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateformat')

const folderSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        aspirations: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Aspiration'
            }]
    }
)
const Folder = model('Folder', folderSchema);
module.exports = Folder;