const Hotel = require('../../Database/models/models');


module.exports = {
  getAllHotels : (req, res) => {
    Hotel.Hotel.findAll({where: {tripId: req.body.tripId}})
    .then((hotels)=>{
      res.status(200).send(hotels)
    })
    .catch(err => {
      console.log("can't fetch all hotels in db", err)
    })
  },

  addHotel : (req, res) => {
    Hotel.Hotel.create({
      name: req.body.name,
      address: req.body.address,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    }, {where: {tripId: req.body.tripId}})
    .then(hotels => {
      res.status(201).send(hotels);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  }
}
