const piecesController = require('../controllers/piecesController');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  piecesController.findAllUnfinished(req, res);
  next();
});

module.exports = router;