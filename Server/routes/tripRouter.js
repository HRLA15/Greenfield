const router = require('express').Router();
const tripController = require('../controllers/tripController')

router.route('/trip')
  .post(tripController.addTrip)
  .delete(tripController.deleteTrip)
//   .get(tripController.allTrips);

router.route('/trip/:id')
  .put(tripController.updateTrip)



module.exports = router;
