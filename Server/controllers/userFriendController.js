const UserFriend = require('../../Database/models/models')

module.exports = {
  getUserFriends: (req, res) => {
    console.log('this is the req', req.params)
    UserFriend.User.findAll({
      where: {id: req.params.userId},
      include: [{
        model: UserFriend.User, as: 'friend'
      }]
    })
    .then(friend => {
      res.status(202).send(friend);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  getInvitedParticipants: (req, res) => {
    console.log('req.paramasdfasdfasdfjklhajksdfhalksjdhfs', req.params)
    UserFriend.UserTrip.findAll({
      where: {tripId: req.params.tripId, userId: req.params.userId},
      // include: [{
      //   model: UserFriend.User, 
        include: [{
          model: UserFriend.User, as: 'participant'
        }]
        // where: {id: req.params.userId},
        // model: UserFriend.User, as: 'friend',
        // include: [{
        //   model: UserFriend.Trip,
        //   where: {id: req.params.tripId}
        // }]
      // }]
    })
    .then(participants => {
      res.status(202).send(participants);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },

  friendTripConfirmation: (req, res) => {
    console.log('this is req paramasdfasdfasdfasdfasdfs', req.params)
    UserFriend.UserTrip.update({
      participantConfirmed: true
    }, {where: {userId: req.params.userId, tripId: req.params.tripId, participantId: req.params.participantId}})
      .then(confirmed => {
        res.status(202).send(confirmed);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  getConfirmedParticipants: (req, res) => {
    UserFriend.UserTrip.findAll({
      where: {confirmed: true},
      include: [{
        model: UserFriend.User, as: 'participant'
      }]
    })
      .then(confirmed => {
        res.status(202).send(confirmed);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  addFriendToTrip: (req, res) => {
    console.log('req.params', req.params)
    UserFriend.UserTrip.findOrCreate({where: {participantId: req.params.participantId},
      defaults: {
      tripId: req.params.tripId,
      participantId: req.params.participantId,
      userId: req.params.userId,
      invited: true}})
        .spread((addfriend,created) => {
          UserFriend.UserTrip.update({
            participantId: req.params.participantId,
          }, {where: {userId: req.params.userId, tripId: req.params.userId}})
            .then(updated => {
              res.status(202).send(updated);
            })
            .catch(err => {
              res.status(404).send(err);
            })
        })
        .catch(err => {
          console.log('there is an err adding friend to trip', err);
        })
  },

  addFriend: (req, res) => {
    console.log('this is req.params in friends', req.params)
    UserFriend.UserFriend.findOrCreate({where: {friendId: req.params.friendId},
      defaults: {
        friendId: req.params.friendId,
        userId: req.params.userId
      }})
        .spread((addfriend, created) => {
          UserFriend.UserFriend.update({
            friendId: req.params.friendId
          }, {where: {userId: req.params.userId, friendId: req.params.friendId}})
            .then(updated => {
              res.status(202).send(updated);
            })
            .catch(err => {
              res.status(404).send(err);
            })
        })
        .catch(err => {
          console.log('there is an error with adding friends', err);
        })
  }
}