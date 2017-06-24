const router = require('express').Router();
const tripController = require('../controllers/tripController')

//id = tripId

//Trip Detail --works
router.get('/getTripSummary/:tripId', tripController.getTripData);
router.post('/postTripSummary', tripController.postTripData);
router.put('/putTripSummary/:tripId', tripController.updateTripData);

//Hotels  -- works
router.get('/getTripNearbyHotels/:tripId', tripController.getTripNearbyHotels);

// Post hotels   --works
router.post('/postTripNearbyHotels/:tripId', tripController.postTripNearbyHotels);

//Activities use the tripId --works
router.get('/getTripActivities/:tripId', tripController.getTripActivities);

//Post Activities -- works
router.post('/postTripActivity/:tripId', tripController.postTripActivity);
router.delete('/deleteTripActivity/:tripId', tripController.deleteTripActivity);

module.exports = router;