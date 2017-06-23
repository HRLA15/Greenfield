const Activity = require('../../Database/models');


module.exports = {
  getAllActivity : (req, res) => {
    Activity.Activity.findAll({where: {tripId: req.params.tripId}})
    .then((activities)=>{
      res.status(200).send(activities)
    })
    .catch(err => {
      console.log("can't fetch all activities in db", err)
    })
  },
  
  addActivity : (req, res) => {
    Activity.Activity.create({
      name: req.body.name,
      address: req.body.address,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    }, {where: {tripId: req.body.tripId}})
    .then(activity => {
      res.status(201).send(activity);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  }
}