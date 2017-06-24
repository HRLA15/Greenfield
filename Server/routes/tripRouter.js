const router = require('express').Router();
const tripController = require('../controllers/tripController')

//Trip Detail
router.get('/getTripSummary/:tripId', tripController.getTripData);
router.post('/postTripSummary', tripController.postTripData);
router.put('/putTripSummary/:tripId', tripController.updateTripData);

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


module.exports = router;