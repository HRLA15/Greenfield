const router = require('express').Router();
const tripController = require('../controllers/tripController')


//Trip Detail
router.get('/getTripSummary/:id', tripController.getTripData);
router.post('/postTripSummary/:id', tripController.postTripData);
router.put('/putTripSummary/:id', tripController.updateTripData);

//Hotels  user the tripid
router.get('/getTripNearbyHotels/:id', tripController.getTripNearbyHotels);

// user the hotelid
router.post('/postTripNearbyHotels/:id', tripController.postTripNearbyHotels);

//Activities use the tripid
router.get('/getTripActivities/:id', tripController.getTripActivities);

//use the activitiesid
router.post('/postUserUpcomingTrips/:id', tripController.postTripActivity);
router.delete('/deleteTripActivity/:id', tripController.deleteTripActivity);

module.exports = router;