const router = require('express').Router();
const userTripController = require('../controllers/userTripController')


// id = userId -- works
router.get('/getAllUserTrips/:userId', userTripController.getAllUserTrips);

//need to pass down the tripId also -- works
router.post('/postUserTrip/:userId/:tripId', userTripController.postUserTrip);


// this is in the userfriend router/controller
// router.get('/getTripUsers/:tripId', userTripController.getTripUsers);

//
// router.get('/getCompletedTrips/:id', userTripController.getCompletedTrips);

//get all trips for one individual user
//   getAllUserTrips: (userId) => (
//     axios.get(`http://localhost:3000/getAllUserTrips/${userId}`)
//   ),

// //get all users that are going on one particular trip
//   getTripFriendsList: (tripId) => (
//     //should return array of users/friends obj that are confirmed for given trip
//     axios.get(`http://localhost:3000/getTripFriendsList/${tripId}`)
//   ),
module.exports = router;