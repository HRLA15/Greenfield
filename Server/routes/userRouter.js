const router = require('express').Router();
const userController = require('../controllers/userController');

// get the user by auth0 token
router.get('/getOneUser/:idToken', userController.getOneUser)
<<<<<<< HEAD
<<<<<<< HEAD

// add user profile pic/ update if he has already created a useraccount
router.post('/postUserProfilePic/:userId', userController.postUserProfilePic)

// add users profile info/ update if he already created a useraccount
=======
router.post('/postUserProfilePic/:userId', userController.postUserProfilePic)
>>>>>>> made a delete pending function, added username to user, figured out how to add user to the vote
=======

// add user profile pic/ update if he has already created a useraccount
router.post('/postUserProfilePic/:userId', userController.postUserProfilePic)

// add users profile info/ update if he already created a useraccount
>>>>>>> fixed edge cases of adding same trip, same friend etc.. need to still figure out how to post the data that is coming in as an array
router.post('/postUserProfileInfo/:userId', userController.postUserProfileInfo)

module.exports = router;
