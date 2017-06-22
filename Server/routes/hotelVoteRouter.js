const hotelVoteController = require('../controllers/hotelVoteController');
const router = require('express').Router();

router.route('/hotelvote')
  .get(hotelVoteController.allVotes)
  .post(hotelVoteController.addVote)

router.route('/hotevote/:userId')
  .delete(hotelVoteController.deleteVote)

module.exports = router;
