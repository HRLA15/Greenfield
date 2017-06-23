const Trip = require('../../Database/models');

module.exports = {
  getTripData: (req, res) => {
    Trip.Trip.findAll({where: {id: req.params.id }})
      .then(trip => {
        res.status(202).send(trip);
      })
      .catch(err => {
        res.status(404).send(err);
      }, {where: {id: req.params.id }})
  },
  
  postTripData: (req, res) => {
    let tripData = req.body;

    Trip.Trip.create({
      title: tripData.title,
      destination: tripData.destination,
      startDate: tripData.startDate,
      endDate: tripData.endData,
      description: tripData.description

    }, {where: {id: req.params.id }})
      .then(trip => {
        res.status(202).send(trip);
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
      endDate: tripData.endData,
      description: tripData.description
    }, {where: {id: req.params.id }})
      .then(trip => {
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
        model: Hotel
      }]
    }, {where: {id: req.params.id}})
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
      latitude: tripData.latitude
    }, {where: {id: req.params.id}})
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
        model: Activity
      }]
    }, {where: {id: req.params.id }})
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
      latitude: tripData.latitude

    }, {where: {id: req.params.id }})
      .then(activity => {
        res.status(202).send(activity);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  deleteTripActivity: (req, res) => {
    let tripData = req.body;

    Trip.Activity.destroy({where: {id: req.params.id})
      .then(activity => {
        res.sendStatus(202).send('deleted');
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }
}