const User = require('../../Database/models');

module.exports = {
  getOneUser: (req, res) => {
    User.User.findAll({where: {idToken: req.params.idToken }})
      .then(user => {
        res.status(200).send(user);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  postUserProfileInfo: (req, res) => {
    User.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      idToken: req.body.idToken
    }, {where: {id: req.params.id }})
      .then(profileinfo => {
        res.status(202).send(profileinfo);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  postUserProfilePic: (req, res) => {
    User.User.update({
      url: req.body.url
    }, {where: {id: req.params.id }})
      .then(profilepic => {
        res.status(202).send(profilepic);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

}

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


router.get('/getOneUser/:idToken', userController.getOneUser)
router.post('/postUserProfilePic/:id', userController.postUserProfilePic)
router.post('/postUserProfileInfo/:userId', userController.postUserProfileInfo)


module.exports = {
  getOneUser: (idToken) => (
    //should return the userObj that matches auth0 token
    axios.get(`http://localhost:3000/getOneUser/${idToken}`)
  ),
  getAllUserTrips: (userId) => (
    axios.get(`http://localhost:3000/getUserPreviousTrips/${userId}`)
  ),
  postUserProfilePic: (userId, imgUrl) => (
    //should post/update imgUrl of a given userid
    axios.post(`http://localhost:3000/postUserProfilePic/${userId}`, {
      url: imgUrl
    })
  ),
  postUserProfileInfo: (userId, userData) => (
    //should post/update userprofileinfo with a given userId
    axios.post(`http://localhost:3000/postUserProfileInfo/${userId}`, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email
    })
  )
}
