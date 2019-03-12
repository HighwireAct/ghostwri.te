const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PieceSchema = new Schema({
  blocks: [{
    type: Schema.Types.ObjectId,
    ref: 'Block'
  }],
  authorCount: Number,
  wordCount: Number
}, {
  timestamps: true
});

const Piece = mongoose.model('Piece', PieceSchema);

module.exports = Piece;