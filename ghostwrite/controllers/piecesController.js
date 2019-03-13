const db = require('../models');

module.exports = {
  findAllUnfinished: (req, res) => {
    db.Piece
      .find({ authorCount: { $lt: 5 }})
      .populate('Block')
      .sort({ updatedAt: -1 })
      .then(dbModel => console.log(dbModel))
      .catch(err => console.error(err));
  }
}