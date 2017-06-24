const User = require('../../Database/models/models');

module.exports = {
  getOneUser: (req, res) => {
    User.User.findAll({where: {idToken: req.params.idToken }})
      .then(user => {
        res.status(200).send(user);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  postUserProfileInfo: (req, res) => {
<<<<<<< HEAD
    console.log('this is req params', req.params)
    console.log('this is req body', req.body)
    User.User.findOrCreate({where: {id: req.params.userId}, 
      defaults: {
        firstName: req.body.firstName, 
        username: req.body.username,
        lastName: req.body.lastName,
        email: req.body.lastName,
        idToken: req.body.idToken
    }})
      .spread((user, created) => {
        User.User.update({
          firstName: req.body.firstName, 
          username: req.body.username,
          lastName: req.body.lastName,
          email: req.body.lastName,
          idToken: req.body.idToken
        }, {where: {id: req.params.userId}})
          .then(user => {
            res.status(202).send(user);
          })
          .catch(err => {
            res.status(404).send(err);
          })
=======
    User.User.create({
      firstName: req.body.firstName,
      username: req.body.username,
      lastName: req.body.lastName,
      email: req.body.email,
      idToken: req.body.idToken
    }, {where: {id: req.params.userId }})
      .then(profileinfo => {
        res.status(202).send(profileinfo);
>>>>>>> refactored to make the router/controller/models optimized. finished the hotelvotes database. added username to user. going to add a option to delete pending trips, need to figure out how to add the user to the sum of the count, friends is coming in as an array... have to figure out how to add them in, individually
      })
      .catch(err => {
        console.log('err in creating the profile info', err);
      })
  },


  postUserProfilePic: (req, res) => {
<<<<<<< HEAD
    User.User.findOrCreate({where: {id: req.params.userId}, defaults: {url: req.body.url}})
      .spread((user,created) => {
        User.User.update({
          url: req.body.url
        }, {where: {id: req.params.userId }})
          .then(updated => {
            res.status(200).send(updated);
          })
          .catch(err => {
            res.status(404).send(err);
          })
=======
    User.User.update({
      url: req.body.url
    }, {where: {id: req.params.userId }})
      .then(profilepic => {
        //profilepic is outputting how many attributes that it changed
        // return User.User.findAll({where: {id: req.params.userId}})  this should work when we get save stuff in our database
        res.status(200).send(profilepic);
>>>>>>> made a delete pending function, added username to user, figured out how to add user to the vote
      })
      .catch(err => {
        console.log('err in creating the profile pic', err);
      })
  },
}
