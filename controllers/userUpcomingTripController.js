const UserUpcomingTrip = require('../../Database/models');

module.exports = {
  addUpcomingTrip: (req, res) => {
    UserUpcomingTrip.UserUpcomingTrip.create({
      name: req.body.name
    })
    .then(trip => {
      res.status(200).send(trip);
    })
  },
  
  getAllUpcomingTrip: (req, res) => {
    UserUpcomingTrip.UserUpcomingTrip.findAll({})
      .then(trips => {
        res.status(200).send(trips);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getOneUpcomingTrip: (req, res) => {
    UserUpcomingTrip.UserUpcomingTrip.find({where: {id: req.params.id}})
    .then(trip => {
      res.status(200).send(trip);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  deleteUpcomingTrip: (req, res) => {
    UserUpcomingTrip.UserUpcomingTrip.destroy({where: {id: req.params.id }})
      .then(trip => {
        res.status(202).send('destroyed');
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },
}
