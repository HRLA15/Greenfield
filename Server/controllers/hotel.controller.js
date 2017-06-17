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
      ID: req.body.ID,
      H_NAME: req.body.H_NAME,
      H_Count: req.body.H_Count,
      P_ID: req.body.P_ID
    })
  }
}