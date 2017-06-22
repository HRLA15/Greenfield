const router = require('express').Router();
const userTripController = require('../controllers/userTripController')

router.route('/usercurrenttrip')
  .post(userTripController.addCurrentTrip)
  .get(userTripController.getCurrentTrip)
  .delete(userTripController.deleteCurrentTrip)

router.route('/usercurrenttrip/:id')
  .get(userTripController.getOnePendingTrip)
