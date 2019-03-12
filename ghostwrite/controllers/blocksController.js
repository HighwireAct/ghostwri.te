const db = require("../models");

module.exports = {
  create: (req, res) => {
    console.log(req);
    const { authorId, text, wordCount, pieceId } = req.body; 
    db.Block
      .create({
        author: authorId,
        text: text,
        wordCount: wordCount
      })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }
}