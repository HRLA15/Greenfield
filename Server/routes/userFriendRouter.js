const router = require('express').Router();
const userFriendController = require('../controllers/userFriendController');

// get all friends of a user
router.get('/getUserFriends/:userId', userFriendController.getUserFriends);
// router.post('/inviteFriend/:userId/:friendId', userFriendController.inviteFriend);

// Will get you the names of the friends that have been invited
router.get('/getInvitedParticipants/:userId/:tripId', userFriendController.getInvitedParticipants);

//invite a friend to a trip
router.post('/addFriendToTrip/:userId/:tripId/:participantId', userFriendController.addFriendToTrip)

// add a friend
router.post('/addFriend/:userId/:friendId', userFriendController.addFriend)

// friend confirmation of attending the trip 
router.post('/friendTripConfirmation/:userId/:tripId/:participantId', userFriendController.friendTripConfirmation)

// get all friends that are attending the trip
router.get('/allConfirmedParticipants/:userId/:tripId', userFriendController.getConfirmedParticipants)

module.exports = router;
