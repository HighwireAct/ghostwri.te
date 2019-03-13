const usersController = require('../controllers/usersController');

const router = require('express').Router();

router.route('/')
      .post(usersController.create);

module.exports = router;