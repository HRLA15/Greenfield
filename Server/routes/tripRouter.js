const router = require('express').Router();
const tripController = require('../controllers/tripController')

//Trip Detail
router.get('/getTripSummary/:tripId', tripController.getTripData);
router.post('/postTripSummary', tripController.postTripData);
router.put('/putTripSummary/:tripId', tripController.updateTripData);

<<<<<<< HEAD
//Get the Nearby Hotels particular trip
router.get('/getTripNearbyHotels/:tripId', tripController.getTripNearbyHotels);

// Post hotels from Google Maps
router.post('/postTripNearbyHotels/:tripId', tripController.postTripNearbyHotels);

//Get the Nearby Activities from a particular trip
router.get('/getTripActivities/:tripId', tripController.getTripActivities);

//Post/Delete Activities
router.post('/postTripActivity/:tripId', tripController.postTripActivity);
router.delete('/deleteTripActivity/:tripId', tripController.deleteTripActivity);

//Post/update HotelVote for friends prevents friend from voting multiple times
router.post('/hotelVote/:hotelId/:friendId', tripController.voteOnHotel)

//Post/Update HoteVote for user prevents user from from voting multiple times
router.post('/userHotelVote/:hotelId/:userId', tripController.userVoteOnHotel);

//Sum of the votes of each hotel for all users
router.get('/sumOfVote/:hotelId', tripController.sumOfVote)


=======
//Hotels
router.get('/getTripNearbyHotels/:tripId', tripController.getTripNearbyHotels);

// Post hotels
router.post('/postTripNearbyHotels/:tripId', tripController.postTripNearbyHotels);

//Activities use the tripId
router.get('/getTripActivities/:tripId', tripController.getTripActivities);

//Post Activities
router.post('/postTripActivity/:tripId', tripController.postTripActivity);
router.delete('/deleteTripActivity/:tripId', tripController.deleteTripActivity);

//Post/update HotelVote for friends prevents user from voting multiple times
router.post('/hotelVote/:userId/:hotelId/:friendId', tripController.voteOnHotel)

//Sum of the votes of each hotel
router.get('/sumOfVote/:hotelId', tripController.sumOfVote)

>>>>>>> refactored to make the router/controller/models optimized. finished the hotelvotes database. added username to user. going to add a option to delete pending trips, need to figure out how to add the user to the sum of the count, friends is coming in as an array... have to figure out how to add them in, individually
module.exports = router;