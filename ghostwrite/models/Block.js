const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlockSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: true
  },
  wordCount: Number
}, {
  timestamps: true
});

const Block = mongoose.model('Block', BlockSchema);

module.exports = Block;