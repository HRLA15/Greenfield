const router = require('express').Router();
const userController = require('../controllers/userController');

// get the user by auth0 token
router.get('/getOneUser/:idToken', userController.getOneUser);

// add user profile pic/ update if he has already created a useraccount
router.post('/postUserProfilePic/:userId', userController.postUserProfilePic);

// add users profile info/ update if he already created a useraccount
router.post('/postUserProfileInfo/:userId', userController.postUserProfileInfo);

//add users to the datebase
router.post('/postNewUser/:idToken', userController.postNewUser);

module.exports = router;
