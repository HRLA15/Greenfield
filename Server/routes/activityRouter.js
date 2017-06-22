const router = require('express').Router();
const activityController = require('../controllers/activityController');

router.route('/hotel')
  .post(activityController.addHotel)
  .get(activityController.getAllHotels)
