const UserTrip = require('../../Database/models')

module.exports = {
  getAllUserTrips: (req, res) => {
    UserTrip.UserTrip.findAll({
      include: [{
        model: User,
        include: [{
          model: Trip
        }]
      }]
    }, {where: {id: req.params.userId}})
      .then(usertrip => {
        res.status(202).send(usertrip);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getTripUsers: (req, res) => {
    UserTrip.UserTrip.findAll({
      include: [{
        model: Trip,
        where: {id: req.params.tripId},
        include: [{
          model: User
        }]
      }]
    })
      .then(usertrip => {
        res.status(202).send(usertrip);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  // getCompletedTrips: (req, res) => {
  //   UserTrip.UserTrip.findAll({
  //     include: [{
  //       model: User,
  //       include: [{
  //         model: Trip,
  //         where: {endDate: {
  //           $lt: req.body.endDate
  //         }}
  //       }]
  //     }]
  //   }, {where: {userId: req.params.userId}})
  // }
}




// router.get('/getCompletedTrips/:id', userTripController.getCompletedTrips);
