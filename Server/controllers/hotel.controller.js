const Hotel = require('../../Database/models/hotelModel.js')

module.exports = {
  getAllHotels : (req, res) => {
    Hotel.findAll({})
    .then((hotels)=>{
      res.status(200).send(hotels)
    })
    .catch(err => {
      console.log("can't fetch all hotels in db", err)
    })
  },
  addHotel : (req, res) => {
    Hotel.create({
      hotelName: req.body.hotelName,
      hotelVoteCount: req.body.hotelVoteCount,
      P_ID: req.body.P_ID
    })
  }
}