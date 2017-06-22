const router = require('express').Router();
const profilePicController = require('../controllers/profilePicRouter');

router.route('/profilepic')
  .post(profilePicController.addPic)
  .delete(profilePicController.deletePic)
  
router.route('/profilepic/:id')
  .put(profilePicController.updatePic)

  module.exports = router;
