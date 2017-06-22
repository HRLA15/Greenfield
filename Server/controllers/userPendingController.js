const UserPending = require('../../Database/models');

module.exports = {
  getAllPendingFromOneUser: (req, res) => {
    UserPending.UserPending.findAll({
      include: [{
        model: UserPending.UserPendingTrip
      }]
    }, {where: {userId: req.params.userId}})
      .then(pendingtrips => {
        res.status(202).send(pendingtrips);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }
}