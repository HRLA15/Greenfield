const UserCompleted = require('../../Database/models/models');

module.exports = {
  getAllCompletedFromOneUser: (req, res) => {
    UserCompleted.UserCompleted.findAll({
      include: [{
        model: UserCompleted.UserCompletedTrip
      }]
    }, {where: {userId: req.params.userId}})
      .then(completedtrips => {
        res.status(202).send(completedtrips);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }
}