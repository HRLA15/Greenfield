const router = require('express').Router();
const userTripController = require('../controllers/userTripController')


// get all the trips of a user
router.get('/getAllUserCreatedTrips/:userId', userTripController.getAllUserTrips);

// add the trip that the user has created -- trip can only be created once and only by one person
router.post('/postUserTrip/:userId/:tripId', userTripController.postUserTrip);

// get the completed trip for user.... if the end date of the trip already has ended when they created the trip
router.get('/getUserPreviousTrips/:userId', userTripController.getCompletedTrips);

// get friend completed trip
router.get('/getCompletedFriendTrip/:participantId', userTripController.getCompletedFriendTrips);

// get upcoming trip for user
router.get('/getUserUpcomingTrips/:userId', userTripController.getUpcomingTrips);

//get upcoming trip for friends
router.get('/getUpcomingFriendTrips/:participantId', userTripController.getUpcomingFriendTrips);

// get pending trips for friends
router.get('/getUserPendingTrips/:participantId', userTripController.getPendingFriendTrips);
router.delete('/deleteUserPendingTrip/:participantId/:tripId', userTripController.deletePendingFriendTrip);



module.exports = router;