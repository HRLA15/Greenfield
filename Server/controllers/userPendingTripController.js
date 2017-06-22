const UserPendingTrip = require('../../Database/models');

module.exports = {
  addPendingTrip: (req, res) => {
    UserPendingTrip.UserPendingTrip.create({
      name: req.body.name
    })
    .then(trip => {
      res.status(200).send(trip);
    })
  },
  
  getAllPendingTrip: (req, res) => {
    UserPendingTrip.UserPendingTrip.findAll({})
      .then(trips => {
        res.status(200).send(trips);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getOnePendingTrip: (req, res) => {
    UserPendingTrip.UserPendingTrip.find({where: {id: req.params.id}})
    .then(trip => {
      res.status(200).send(trip);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  deletePendingTrip: (req, res) => {
    UserPendingTrip.UserPendingTrip.destroy({where: {id: req.params.id }})
      .then(trip => {
        res.status(202).send('destroyed');
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },
}
