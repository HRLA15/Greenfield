const UserCompletedTrip = require('../../Database/models');

module.exports = {
  addCompletedTrip: (req, res) => {
    UserCompletedTrip.UserCompletedTrip.create({
      name: req.body.name
    })
    .then(trip => {
      res.status(200).send(trip);
    })
  },
  
  getAllCompletedTrip: (req, res) => {
    UserCompletedTrip.UserCompletedTrip.findAll({})
      .then(trips => {
        res.status(200).send(trips);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getOneCompletedTrip: (req, res) => {
    UserCompletedTrip.UserCompletedTrip.find({where: {id: req.params.id}})
    .then(trip => {
      res.status(200).send(trip);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },
}
