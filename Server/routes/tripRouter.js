const router = require('express').Router();
const tripController = require('../controllers/tripController')

//id = tripId

//Trip Detail 
router.get('/getTripSummary/:id', tripController.getTripData);
router.post('/postTripSummary', tripController.postTripData);
router.put('/putTripSummary/:id', tripController.updateTripData);

//Hotels  
router.get('/getTripNearbyHotels/:id', tripController.getTripNearbyHotels);

// Post hotels
router.post('/postTripNearbyHotels/:id', tripController.postTripNearbyHotels);

//Activities use the tripid
router.get('/getTripActivities/:id', tripController.getTripActivities);

//Post Activities
router.post('/postTripActivity/:id', tripController.postTripActivity);
router.delete('/deleteTripActivity/:id', tripController.deleteTripActivity);

module.exports = router;