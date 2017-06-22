const UserCompletedController = require('../controllers/UserCompletedController')
const router = require('express').Router();

// router.route('/usercompleted')
//   .post(UserCompletedController.addCompletedTrip)

router.route('/usercompleted/:userId')
  .get(UserCompletedController.getAllCompletedFromOneUser)