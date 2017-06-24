const Trip = require('../../Database/models/models');

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
  }
}