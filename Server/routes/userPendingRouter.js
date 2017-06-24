const UserPendingController = require('../controllers/UserPendingController')
const router = require('express').Router();

// router.route('/userpending')
//   .post(UserPendingController.addPendingTrip)

router.route('/userpending/:userId')
  .get(UserPendingController.getAllPendingFromOneUser)


module.exports = router;
