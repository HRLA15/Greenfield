const router = require('express').Router();
const userFriendController = require('../controllers/userFriendController');

// get all friends of a user
router.get('/getUserFriends/:userId', userFriendController.getUserFriends);

// Will get you the names of the friends that have been invited
router.get('/getInvitedParticipants/:userId/:tripId', userFriendController.getInvitedParticipants);

//invite a friend to a trip  ????????????
router.post('/postInvitedFriends/:userId/:tripId/:participantId', userFriendController.addFriendToTrip)

// add a friend
router.post('/addFriend/:userId/:friendId', userFriendController.addFriend)

// friend confirmation of attending the trip 
router.post('/friendTripConfirmation/:userId/:tripId/:participantId', userFriendController.friendTripConfirmation)

// get all friends that are attending the trip
<<<<<<< HEAD
router.get('/getTripFriendsList/:userId/:tripId', userFriendController.getConfirmedParticipants)
=======
router.get('/getTripFriendsList/:tripId', userFriendController.getConfirmedParticipants)
>>>>>>> changed the routes to match frontend endpoints

module.exports = router;
