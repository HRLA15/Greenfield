const router = require('express').Router();
const userController = require('../controllers/userController');


router.get('/getOneUser/:idToken', userController.getOneUser)
router.post('/postUserProfilePic/:userId', userController.postUserProfilePic)
router.post('/postUserProfileInfo/:userId', userController.postUserProfileInfo)

module.exports = router;
