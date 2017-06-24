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
    User.User.create({
      firstName: req.body.firstName,
      username: req.body.username,
      lastName: req.body.lastName,
      email: req.body.email,
      idToken: req.body.idToken
    }, {where: {id: req.params.userId }})
      .then(profileinfo => {
        res.status(202).send(profileinfo);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },

  postUserProfilePic: (req, res) => {
    User.User.update({
      url: req.body.url
    }, {where: {id: req.params.userId }})
      .then(profilepic => {
        //profilepic is outputting how many attributes that it changed
        // return User.User.findAll({where: {id: req.params.userId}})  this should work when we get save stuff in our database
        res.status(200).send(profilepic);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },
}
