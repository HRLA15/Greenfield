const router = require('express').Router();
const userUpcomingTripController = require('../controllers/userUpcomingTripController')

router.route('/userupcomingtrip')
  .post(userUpcomingTripController.addUpcomingTrip)
  .get(userUpcomingTripController.getAllUpcomingTrip)

router.route('/userupcomingtrip/:id')
  .get(userUpcomingTripController.getOneUpcomingTrip)
  .delete(userUpcomingTripController.deleteUpcomingTrip)
