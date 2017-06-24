const router = require('express').Router();
const hotelController = require('../controllers/hotelController');

router.route('/hotel')
  .post(hotelController.addHotel)
  .get(hotelController.getAllHotels)

module.exports = router;
