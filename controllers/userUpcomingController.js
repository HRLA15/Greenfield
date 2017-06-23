const UserUpcoming = require('../../Database/models');

module.exports = {
  getAllUpcomingFromOneUser: (req, res) => {
    UserUpcoming.UserUpcoming.findAll({
      include: [{
        model: UserUpcoming.UserUpcomingTrip
      }]
    }, {where: {userId: req.params.userId}})
      .then(upcomingtrips => {
        res.status(202).send(upcomingtrips);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }
}