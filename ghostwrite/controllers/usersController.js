const db = require('../models');

module.exports = {
  create: (req, res) => {
    db.User
      .create(req.body)
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }
}