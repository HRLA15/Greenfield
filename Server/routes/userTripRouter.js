const router = require('express').Router();
const userTripController = require('../controllers/userTripController')


// id = userId
router.get('/getAllUserTrips/:id', userTripController.getAllUserTrips);

// id = tripId
router.get('/getTripUsers/:id', userTripController.getTripUsers);

//
router.get('/getCompletedTrips/:id', userTripController.getCompletedTrips);

//get all trips for one individual user
  getAllUserTrips: (userId) => (
    axios.get(`http://localhost:3000/getAllUserTrips/${userId}`)
  ),

//get all users that are going on one particular trip
  getTripFriendsList: (tripId) => (
    //should return array of users/friends obj that are confirmed for given trip
    axios.get(`http://localhost:3000/getTripFriendsList/${tripId}`)
  ),