const UserTrip = require('../../Database/models/models');
const Sequelize = require('sequelize');

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

  getCompletedTrips: (req, res) => {
    UserTrip.UserTrip.findAll({
      where: {userId: req.params.userId},
      include: [{
        model: UserTrip.Trip,
        where: {endDate: {$lt: Sequelize.col('currentDate')}}
      }]
    })
      .then(completedtrip => {
        res.status(202).send(completedtrip);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getCompletedFriendTrips: (req, res) => {
    UserTrip.UserTrip.findAll({
      where: {userId: req.params.userId, userConfirmed: true, participantConfirmed: true, invited: true},
      include: [{
        model: UserTrip.Trip,
        where: {endDate: {$lt: Sequelize.col('currentDate')}}
      }]
    })
      .then(completedtrip => {
        res.status(202).send(completedtrip);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getUpcomingTrips: (req, res) => {
    UserTrip.UserTrip.findAll({
      where: {userId: req.params.userId, userConfirmed: true},
      include: [{
        model: UserTrip.Trip,
        where: {endDate: {$gt: Sequelize.col('currentDate')}}
      }]
    })
      .then(upcoming => {
        res.status(202).send(upcoming);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getUpcomingFriendTrips: (req, res) => {
    console.log('this is the req params', req.params);
    UserTrip.UserTrip.findAll({
      where: {participantId: req.params.participantId, participantConfirmed: true, userConfirmed: true, invited: true},
      include: [{
        model: UserTrip.Trip,
        where: {endDate: {$gt: Sequelize.col('currentDate')}}
      }]
    })
      .then(upcomingtrip => {
        res.status(202).send(upcomingtrip);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getPendingFriendTrips: (req, res) => {
    UserTrip.UserTrip.findAll({
      where: {participantId: req.params.participantId, invited: true, userConfirmed: true, participantConfirmed: false},
      include: [{
        model: UserTrip.Trip,
        where: {endDate: {$gt: Sequelize.col('currentDate')}}
      }]
    })
      .then(pending => {
        res.status(202).send(pending);
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
}




// router.get('/getCompletedTrips/:id', userTripController.getCompletedTrips);
