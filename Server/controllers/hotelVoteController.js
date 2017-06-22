const HotelVote = require('../../Database/models');

module.exports = {
  allVotes: (req, res) => {
    HotelVote.HotelVote.sum('count', {where: {hotelId: req.body.hotelId, userId: req.body.userId }})
      .then(hotels => {
        res.status(202).send(hotels);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  deleteVote: (req, res) => {

    HotelVote.find({where: {userId: req.params.userId}})
      .then(hotel => {
        HotelVote.HotelVote.destroy({where: {userId: req.params.userId}})
          .then(
            HotelVote.HotelVote.update({
              count: req.params.count // this is not right
            })
            .then(hotel => {
              res.status(202).send(hotel);
            })
            .catch(err => {
              console.log('err in updating the hotelvote', err);
            })
          )
          .catch(err => {
            console.log('err in destroying the HotelVote from user', err);
          })
      })
      .catch(err => {
        console.log('err in finding the userID from the HotelVote', err);
      })
  },

  addVote: (req, res) => {

    HotelVote.HotelVote.findOrCreate({where: {id: req.body.hotelId}, defaults: {count: 1, hotelName: req.body.hotelName}})
      .spread((hotel, created) => {
        HotelVote.HotelVote.update({
          count: req.body.count
        })
          .then(hotelVote => {
            res.status(202).send(hotelVote);
          })
          .catch(err => {
            console.log('err in updating the hotelVote', err);
          })
      })
      .catch(err => {
        console.log('err in finding or creating hotelvote', err);
      })
  }
}