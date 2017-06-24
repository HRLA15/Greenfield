const UserTrip = require('../../Database/models/models');

module.exports = {
  getAllUserTrips: (req, res) => {
    UserTrip.UserTrip.findAll({
      where: {userId: req.params.userId},
      include: [{
        model: UserTrip.Trip
      }]
    })
      .then(usertrip => {
        res.status(202).send(usertrip);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  postUserTrip: (req, res) => {
    UserTrip.UserTrip.create({
      userId: req.params.userId,
      tripId: req.params.tripId
    })
      .then(userTrip => {
        res.status(202).send(userTrip);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  // getTripUsers: (req, res) => {
  //   UserTrip.UserTrip.findAll({
  //     where: {confirmed: true, tripId: req.params.tripId},
  //     include: [{
  //       model: UserTrip.Trip,
  //       where: {id: req.params.id}
  //     }]
  //   })
  //     .then(usertrip => {
  //       res.status(202).send(usertrip);
  //     })
  //     .catch(err => {
  //       res.status(404).send(err);
  //     })
  // },

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
