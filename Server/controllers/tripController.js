const Trip = require('../../Database/models/models');
const Sequelize = require('sequelize')

module.exports = {
  getTripData: (req, res) => {
    Trip.Trip.findAll({where: {id: req.params.tripId }})
      .then(trip => {
        res.status(202).send(trip);
      })
      .catch(err => {
        res.status(404).send(err);
      }, {where: {id: req.params.tripId }})
  },
  
  postTripData: (req, res) => {
    let tripData = req.body;

    Trip.Trip.create({
      title: tripData.title,
      destination: tripData.destination,
      startDate: tripData.startDate,
      endDate: tripData.endDate,
      description: tripData.description,
      url: tripData.url
    })
      .then(trip => {
        res.status(202).send(trip);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  deleteTripHotel: (req, res) => {
    Trip.Hotel.destroy({where: {tripId: id.params.tripId}})
      .then(deleted => {
        res.status(202).send('deleted');
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  updateTripData: (req, res) => {
    let tripData = req.body;

    Trip.Trip.update({
      title: tripData.title,
      destination: tripData.destination,
      startDate: tripData.startDate,
      endDate: tripData.endDate,
      description: tripData.description,
      url: tripData.url,
    }, {where: {id: req.params.tripId}, returning: true })
      .then(trip => {
        Trip.Trip.findAll({where: {id: req.params.tripId}})
          .then(trips => {
            res.status(200).send(trips[0].dataValues);
          })
          .catch(err => {
            res.status(404).res.send(err);
          })
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getTripNearbyHotels: (req, res) => {
    let tripData = req.body;

    Trip.Trip.findAll({
      include: [{
        model: Trip.Hotel,
        where: {tripId: req.params.tripId}
      }]
    })
      .then(hotels => {
        res.status(202).send(hotels);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  postTripNearbyHotels: (req, res) => {
    let tripData = req.body;

    Trip.Hotel.findOrCreate({where: {address: req.body.address},
    defaults: {
      name: tripData.name,
      address: tripData.address,
      url: tripData.url,
      tripId: req.params.tripId
    }, returning: true})
      .spread((hotel, created) => {
        res.status(202).send(hotel);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getTripActivities: (req, res) => {
    let tripData = req.body;

    Trip.Trip.findAll({
      include: [{
        model: Trip.Activity,
        where: {tripId: req.params.tripId}
      }]
    })
    .then(activities => {
      res.status(202).send(activities);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  postTripActivity: (req, res) => {
    let tripData = req.body;

    Trip.Activity.findOrCreate({where: {address: req.body.address},
      defaults: {
        name: tripData.name,
        address: tripData.address,
        url: tripData.url,
        tripId: req.params.tripId
      }})
        .spread((activity, created) => {
          res.status(202).send(activity);
        })
        .catch(err => {
          res.status(404).send(err);
        })
    },

  deleteTripActivity: (req, res) => {
    let tripData = req.body;

    Trip.Activity.destroy({where: {tripId: req.params.tripId}})
      .then(activity => {
        res.status(202).send('deleted');
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  voteOnHotel: (req, res) => {
    Trip.HotelVote.findOrCreate({where: {friendId: req.params.friendId}, default: {vote: 1, activityId: req.params.hotelId}})
      .spread((hotel, created) => {
        Trip.HotelVote.update({
          hotelId: req.params.hotelId,
          vote: 1
        }, {where: {friendId: req.params.friendId}})
          .then(update => {
            res.status(202).send(update);
          })
          .catch(err => {
            res.status(404).send(err);
          })
      })
  },

  userVoteOnHotel: (req, res) => {
    Trip.HotelVote.findOrCreate({where: {userId: req.params.userId}, default: {vote: 1, hotelId: req.params.hotelId}})
      .spread((hotel, created) => {
        Trip.HotelVote.update({
          hotelId: req.params.hotelId,
          vote: 1
        }, {where: {userId: req.params.userId}})
          .then(update => {
            res.status(202).send(update);
          })
          .catch(err => {
            res.status(404).send(err);
          })
      })
  },

  voteOnActivity: (req, res) => {
    Trip.ActivityVote.findOrCreate({where: {friendId: req.params.friendId}, default: {vote: 1, hotelId: req.params.hotelId}})
      .spread((hotel, created) => {
        Trip.ActivityVote.update({
          activityId: req.params.activityId,
          vote: 1
        }, {where: {friendId: req.params.friendId}})
          .then(update => {
            res.status(202).send(update);
          })
          .catch(err => {
            res.status(404).send(err);
          })
      })
  },

  userVoteOnActivity: (req, res) => {
    Trip.ActivityVote.findOrCreate({where: {userId: req.params.userId}, default: {vote: 1, activityId: req.params.activityId}})
      .spread((hotel, created) => {
        Trip.ActivityVote.update({
          activityId: req.params.activityId,
          vote: 1
        }, {where: {userId: req.params.userId}})
          .then(update => {
            res.status(202).send(update);
          })
          .catch(err => {
            res.status(404).send(err);
          })
      })
  },

  sumOfVoteHotel: (req, res) => {
    Trip.Hotel.findAll({
      attributes: ['name', 'url' , 'address', [Sequelize.fn('SUM', (Sequelize.fn('COALESCE', (Sequelize.col('hotelvotes.vote')),0))), 'count']],
      order: [Sequelize.literal('count DESC NULLS LAST')],
      include: [{
        model: Trip.HotelVote,
        attributes: [],
        raw: true
      }],
      group: ['hotel.id'],
      raw: true
    })
      .then(sum => {
        res.status(202).send(sum);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  sumOfVoteActivity: (req, res) => {
    Trip.Activity.findAll({
      attributes: ['name', 'url', 'address', [Sequelize.fn('SUM', (Sequelize.fn('COALESCE', (Sequelize.col('activityvotes.vote')),0))), 'count']],
      order: [Sequelize.literal('count DESC NULLS LAST')],
      include: [{
        model: Trip.ActivityVote,
        attributes: [],
        raw: true
      }],
      group: ['activity.id'],
      raw: true
    })
      .then(sum => {
        res.status(202).send(sum);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }
}
