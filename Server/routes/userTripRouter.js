const router = require('express').Router();
const userTripController = require('../controllers/userTripController')


// id = userId -- works
router.get('/getAllUserTrips/:userId', userTripController.getAllUserTrips);

//need to pass down the tripId also -- works
router.post('/postUserTrip/:userId/:tripId', userTripController.postUserTrip);

// get the completed trip for user
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