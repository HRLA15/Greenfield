const UserUpcomingController = require('../controllers/UserUpcomingController')
const router = require('express').Router();

// router.route('/userupcoming')
//   .post(UserUpcomingController.addUpcomingTrip)

router.route('/userupcoming/:userId')
  .get(UserUpcomingController.getAllUpcomingFromOneUser)

  module.exports = router;
