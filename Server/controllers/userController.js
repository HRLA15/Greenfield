const User = require('../../Database/models/models');
const Sequelize = require('sequelize');

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
    console.log('this is req params', req.params)
    console.log('this is req body', req.body)
    User.User.findOrCreate({where: {id: req.params.userId}, 
      defaults: {
        firstName: req.body.firstName, 
        username: req.body.username,
        lastName: req.body.lastName,
        email: req.body.email
    },
      order: [[Sequelize.literal('id ASC')]]})
      .spread((user, created) => {
        User.User.update({
          firstName: req.body.firstName, 
          username: req.body.username,
          lastName: req.body.lastName,
          email: req.body.email
        }, {where: {id: req.params.userId}, order: [[Sequelize.literal('id ASC')]]})
          .then(user => {
            res.status(202).send(user);
          })
          .catch(err => {
            res.status(404).send(err);
          })
      })
      .catch(err => {
        console.log('err in creating the profile info', err);
      })
  },

  postUserProfilePic: (req, res) => {
    User.User.findOrCreate({where: {id: req.params.userId}, 
    defaults: {url: req.body.url}, 
    order: [[Sequelize.literal('id ASC')]]})
      .spread((user,created) => {
        User.User.update({
          url: req.body.url
        }, {where: {id: req.params.userId }, order: [[Sequelize.literal('id ASC')]]})
          .then(updated => {
            res.status(200).send(updated);
          })
          .catch(err => {
            res.status(404).send(err);
          });
      });
  },

  postNewUser: (req, res) => {
    User.User.findOrCreate({where: {idToken: req.body.idToken},
      defaults: {
        idToken: req.body.idToken,
      },
      order: [[Sequelize.literal('id ASC')]]})
        .spread((user, created) => {
          res.status(202).send(user);
        })
        .catch(err => {
          res.status(404).send(err);
        })
  }
}
