const piecesController = require('../controllers/piecesController');
const blocksController = require('../controllers/blocksController');

const router = require('express').Router();

router.route('/')
      .get(piecesController.findAllUnfinished);

// router.route('/:id')
//       .get(piecesController.findPieceById);

router.route('/testBlock')
      .post(blocksController.create);

module.exports = router;