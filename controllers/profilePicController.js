const ProfilePic = require('../../Database/models')

module.exports = {
  addPic: (req, res) => {
    ProfilePic.ProfilePic.create({
      url: req.body.url
    }, {where: {userId: req.body.userId}})
    .then(pic => {
      res.status(202).send(pic);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  },
  
  deletePic: (req, res) => {
    ProfilePic.ProfilePic.destroy({where: {userId: req.body.userId }})
      .then(pic => {
        res.status(202).send('deleted');
      })
      .catch(err => {
        res.status(404).send(err);
      })
  },
  
  updatePic: (req, res) => {
    ProfilePic.ProfilePic.update({
      url: req.params.url
    }, {where: {userId: req.params.userId}})
    .then(pic => {
      res.status(202).send(pic);
    })
    .catch(err => {
      res.status(404).send(err);
    })
  } 
}