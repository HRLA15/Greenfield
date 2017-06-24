const router = require('express').Router();
const tripController = require('../controllers/tripController')

//Trip Detail
router.get('/getTripSummary/:tripId', tripController.getTripData);
router.post('/postTripSummary', tripController.postTripData);
router.put('/putTripSummary/:tripId', tripController.updateTripData);

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

module.exports = router;