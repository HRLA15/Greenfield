const UserTrip = require('../../Database/models')

module.exports = {
  addCurrentTrip: (req, res) => {

  },
  
  getCurrentTrip: (req, res) => {

  },

  deleteCurrentTrip: (req, res) => {
    UserTrip.UserTrip.destroy({where: {userId: req.body.userId}})
    
  },

}