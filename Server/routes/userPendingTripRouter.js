const router = require('express').Router();
const userPendingTripController = require('../controllers/userPendingTripController')

router.route('/userpendingtrip')
  .post(userPendingTripController.addPendingTrip)
  .get(userPendingTripController.getAllPendingTrip)

router.route('/userpendingtrip/:id')
  .get(userPendingTripController.getOnePendingTrip)
  .delete(userPendingTripController.deletePendingTrip)
