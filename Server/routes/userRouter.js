const router = require('express').Router();
const userController = require('../controllers/userController');

// get the user by auth0 token
router.get('/getOneUser/:idToken', userController.getOneUser)
<<<<<<< HEAD

// add user profile pic/ update if he has already created a useraccount
router.post('/postUserProfilePic/:userId', userController.postUserProfilePic)

// add users profile info/ update if he already created a useraccount
=======
router.post('/postUserProfilePic/:userId', userController.postUserProfilePic)
>>>>>>> made a delete pending function, added username to user, figured out how to add user to the vote
router.post('/postUserProfileInfo/:userId', userController.postUserProfileInfo)

module.exports = router;
