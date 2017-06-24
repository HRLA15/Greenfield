const router = require('express').Router();
const userFriendController = require('../controllers/userFriendController');

// 
router.get('/getUserFriends/:userId', userFriendController.getUserFriends);
// router.post('/inviteFriend/:userId/:friendId', userFriendController.inviteFriend);

// Will get you the names of the friends that have been invited
router.get('/getInvitedParticipants/:userId/:tripId', userFriendController.getInvitedParticipants);

//add a friend/invite to a trip
router.post('/addFriendToTrip/:userId/:tripId/:participantId', userFriendController.addFriendToTrip)

// add a friend
router.post('/addFriend/:userId/:friendId', userFriendController.addFriend)

// friend confirmation of attending the trip 
router.put('/friendTripConfirmation/:userId/:tripId/:participantId', userFriendController.friendTripConfirmation)

// get all friends that are attending the trip
router.get('/allConfirmedParticipants/:userId/:tripId', userFriendController.getConfirmedParticipants)

module.exports = router;
