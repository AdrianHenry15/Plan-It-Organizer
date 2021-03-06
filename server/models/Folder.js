const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const folderSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        username: {
            type: String
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
            }
        ]
    },
    {
      toJSON: {
        getters: true
      }
    }
)
const Folder = model('Folder', folderSchema);
module.exports = Folder;