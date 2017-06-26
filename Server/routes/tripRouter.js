const router = require('express').Router();
const tripController = require('../controllers/tripController')
//Trip Detail
router.get('/getTripSummary/:tripId', tripController.getTripData);
router.post('/postTripSummary', tripController.postTripData);
router.post('/editTripSummary/:tripId', tripController.updateTripData);
// Get the Nearby Hotels particular trip
router.get('/getTripNearbyHotels/:tripId', tripController.getTripNearbyHotels);
// Post hotels from Google Maps -- prevents you from posting the same hotel with the same address
router.post('/postTripHotel/:tripId', tripController.postTripNearbyHotels);
router.delete('/deleteTripHotel/:hotelId', tripController.deleteTripHotel);
//Get the Nearby Activities from a particular trip
router.get('/getTripActivities/:tripId', tripController.getTripActivities);
//Post/Delete Activities -- prevents you from posting the same activity with the address
router.post('/postTripActivity/:tripId', tripController.postTripActivity);
router.delete('/deleteTripActivity/:activityId', tripController.deleteTripActivity);
//Post/update HotelVote for friends prevents friend from voting multiple times
router.post('/addVoteToHotel/:hotelId/:userId', tripController.userVoteOnHotel)
//Post/Update HoteVote for user prevents user from from voting multiple times
// router.post('/userHotelVote/:hotelId/:friendId', tripController.voteOnHotel);
//Sum of the votes of each hotel for all users -- gets all of the hotels not the top 5... the endpoint is just called top 5
router.get('/getTopFiveHotels/:tripId', tripController.sumOfVoteHotel)
//Post/update Activity for friends prevents friend from voting multiple times
router.post('/addVoteToActivity/:activityId/:userId', tripController.voteOnActivity)
//Post/Update Activity for creator prevents creator from from voting multiple times
// router.post('/friendActivityVote/:activityId/:friendId', tripController.userVoteOnActivity);
//Sum of the votes of each activity for all users
router.get('/getTopFiveActivities/:tripId', tripController.sumOfVoteActivity)
module.exports = router;