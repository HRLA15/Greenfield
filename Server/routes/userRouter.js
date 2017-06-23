const router = require('express').Router();
const userController = require('../controllers/userController');


router.get('/getOneUser/:idToken', userController.getOneUser)
router.post('/postUserProfilePic/:id', userController.postUserProfilePic)
router.post('/postUserProfileInfo/:id', userController.postUserProfileInfo)

module.exports = router;
// router.get('/:user/previousTrips', controller.messages.post)

// router.get('/:user/pendingTrips', controller.users.get)

// router.get('/:user/profileInfo', controller.users.post)



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
