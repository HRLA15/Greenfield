const router = require('express').Router();
const userController = require('../controllers/userController');


router.get('/getOneUser/:idToken', userController.getOneUser)
router.post('/postUserProfilePic/:id', userController.postUserProfilePic)
router.post('/postUserProfileInfo/:id', userController.postUserProfileInfo)

module.exports = router;
