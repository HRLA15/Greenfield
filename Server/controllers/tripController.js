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
  
  updateTripData: (req, res) => {
    let tripData = req.body;
    console.log('this is tripdata', tripData)
    Trip.Trip.update({
      title: tripData.title,
      destination: tripData.destination,
      startDate: tripData.startDate,
      endDate: tripData.endDate,
      description: tripData.description,
      url: tripData.url
    }, {where: {id: req.params.tripId }})
      .then(trip => {
        //return Trip.Trip.findAll({where: {id: req.params.id}}) use this instead of the res.status line when using the database
        res.status(202).send(trip);
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

    Trip.Hotel.create({
      name: tripData.name,
      address: tripData.address,
      longitude: tripData.longitude,
      latitude: tripData.latitude,
      tripId: req.params.tripId
    })
      .then(hotel => {
        res.status(202).send(hotel);
      })
      .catch(err => {
        res.status(202).send(err);
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

    Trip.Activity.create({
      name: tripData.name,
      address: tripData.address,
      longitude: tripData.longitude,
      latitude: tripData.latitude,
      tripId: req.params.tripId
    })
      .then(activity => {
        res.status(202).send(activity);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  deleteTripActivity: (req, res) => {
    let tripData = req.body;

    Trip.Activity.destroy({where: {id: req.params.tripId}})
      .then(activity => {
        res.status(202).send('deleted');
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  voteOnHotel: (req, res) => {
    Trip.HotelVote.findOrCreate({where: {friendId: req.params.friendId}, default: {vote: 1, hotelId: req.params.hotelId}})
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

  sumOfVote: (req, res) => {
    Trip.Hotel.findAll({
      attributes: ['name', [Sequelize.fn('SUM', (Sequelize.col('hotelvotes.vote'))), 'count']],
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
  }
}
