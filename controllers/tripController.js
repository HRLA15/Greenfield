const Trip = require('../../Database/models');

module.exports = {
  addTrip: (req, res) => {
    let trips = req.body;

    Trip.Trip.create({
      title: trips.title,
      destination: trips.destination,
      startDate: trips.startDate,
      endDate: trips.endDate,
      isComplete: trips.isComplete
    })
    .then(trip => {
      res.status(200).send(trip);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  deleteTrip: (req, res) => {
    let trips = req.body;

    Trip.Trip.destroy({where: {id: trips.id}})
      .then(trip => {
        res.status(202).send('deleted')
      })
      .catch(err => {
        res.status(404).send(err)
      })
    },

  updateTrip: (req, res) => {
    Trip.Trip.find({where: {id: req.params.id}})
      .then(trip => {
        Trip.Trip.update({
          title: trip.title,
          destination: trip.destination,
          startDate: trip.startDate,
          endDate: trip.endDate
        })
        .then(trip => {
          res.status(202).send(trip);
        })
        .catch(err => {
          res.status(404).send('couldn\'t update the trip', err);
        })
      })
      .catch(err => {
        console.log('didn\'t find the updated trip', err)
      })
  }
}

