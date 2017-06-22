const router = require('express').Router();
const userCompletedTripController = require('../controllers/userCompletedTripController')

router.route('/usercompletedtrip')
  .post(userCompletedTripController.addCompletedTrip)
  .get(userCompletedTripController.getAllCompletedTrip)

router.route('/usercompletedtrip/:id')
  .get(userCompletedTripController.getOneCompletedTrip)

