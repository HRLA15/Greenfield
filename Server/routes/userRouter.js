const router = require('express').Router();
const userController = require('../controllers/userController');


router.get('/:user/upcomingTrips', controller.messages.get)

router.get('/:user/previousTrips', controller.messages.post)

router.get('/:user/pendingTrips', controller.users.get)

router.get('/:user/profileInfo', controller.users.post)



module.exports = router