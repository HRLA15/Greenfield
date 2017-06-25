const router = require('express').Router();
const userTripController = require('../controllers/userTripController')


// get all the trips of a user
router.get('/getAllUserTrips/:userId', userTripController.getAllUserTrips);

// add the trip that the user has created -- trip can only be created once and only by one person
router.post('/postUserTrip/:userId', userTripController.postUserTrip);

// get the completed trip for user.... if the end date of the trip already has ended when they created the trip
router.get('/getCompletedUserTrip/:userId', userTripController.getCompletedTrips);

// get friend completed trip
router.get('/getCompletedFriendTrip/:participantId', userTripController.getCompletedFriendTrips);

// get upcoming trip for user
router.get('/getUpcomingUserTrip/:userId', userTripController.getUpcomingTrips);

//get upcoming trip for friends
router.get('/getUpcomingFriendTrip/:participantId', userTripController.getUpcomingFriendTrips);

// get pending trips for friends
router.get('/getPendingFriendTrip/:participantId', userTripController.getPendingFriendTrips);
router.delete('/deletePendingTrip/:participantId', userTripController.deletePendingFriendTrip);



module.exports = router;