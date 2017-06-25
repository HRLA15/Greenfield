const Sequelize = require('sequelize');
const db = require('../config');
/*////////////////////////////////////////////////////////////////////////////////
TABLES
//////////////////////////////////////////////////////////////////////////////////*/
const Hotel = db.define('hotel',{
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true,
  }
}, {
  timestamps: false,
})

const Trip = db.define('trip',{
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  destination: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  startDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  currentDate: {
  type: Sequelize.DATEONLY,
  allowNull: false,
  defaultValue: Sequelize.NOW
  },
}, {
  timestamps: false,
})

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true,
  }
}, {
  timestamps: false,
}) 

const User = db.define('user',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  idToken: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
})

//JOIN TABLES

const UserTrip = db.define('usertrip',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  invited: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,    
    allowNull: false
  },
  userConfirmed: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,    
    allowNull: false
  },
  participantConfirmed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
}, {
  timestamps: false,
})

const UserFriend = db.define('userfriend', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
}, {
  timestamps: false,
})

const HotelVote = db.define('hotelvote', {
  vote: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
}, {
  timestamps: false,
})

const ActivityVote = db.define('activityvote', {
  vote: {
    type: Sequelize.INTEGER,
    allowNull: true,
    // defaultValue: 0,
  },
}, {
  timestamps: false,
})

// RELATIONSHIPS
// //////////////////////////////////////////////////////////////////////////////////*/

UserTrip.belongsTo(Trip, { through: UserTrip, foreignKey: {name: 'tripId', unique: false }});
UserTrip.belongsTo(User, { through: UserTrip, foreignKey: {name: 'userId', unique: false }});


// THERE IS A BUG WITH SEQUELIZE WHEN YOU HAVE TO HAVE MORE THAN 2 FOREIGN KEYS IN A TABLE, 
//it says that the foreign keys have to be unique 
//Link: https://github.com/sequelize/sequelize/issues/3220 ... work around up top
      // THIS IS THE ORIGINAL CODE THAT SHOULD WORK, but when adding participants/friends to the usertrip table it gets and error 
// User.belongsToMany(Trip, { through: UserTrip, foreignKey: {name: 'userId', unique: false });
// Trip.belongsToMany(User, { through: UserTrip, foreignKey: 'tripId', unique: false });

Trip.hasMany(Hotel);
Hotel.belongsTo(Trip);

Trip.hasMany(Activity);
Activity.belongsTo(Trip);

User.hasOne(HotelVote);
HotelVote.belongsTo(User);

HotelVote.belongsTo(User, {as: 'friendvote', foreignKey: {name: 'friendId', unique: false}})

Hotel.hasMany(HotelVote);
HotelVote.belongsTo(Hotel);

User.hasOne(ActivityVote);
ActivityVote.belongsTo(User);

ActivityVote.belongsTo(User, {as: 'actvityvote', foreignKey: {name: 'friendId', unique: false}})

Activity.hasMany(ActivityVote);
ActivityVote.belongsTo(Activity);


User.belongsToMany(User, {as: 'friend', through: UserFriend, unique: false})

UserTrip.belongsTo(User, {as: 'participant', through: UserTrip, foreignKey: {name: 'participantId', unique: false }});

// /*////////////////////////////////////////////////////////////////////////////////
// SYNC
// //////////////////////////////////////////////////////////////////////////////////*/
User.sync();
Trip.sync();
UserTrip.sync();
Hotel.sync();
Activity.sync();
HotelVote.sync();
ActivityVote.sync();
UserFriend.sync();



// User.sync({force: true});
// Trip.sync({force: true});
// UserTrip.sync({force: true});
// Hotel.sync({force: true});
// Activity.sync({force: true});
// HotelVote.sync({force: true});
// ActivityVote.sync({force: true});
// UserFriend.sync({force: true});

module.exports = {
  User,
  Trip,
  UserTrip,
  Hotel,
  UserFriend,
  Activity,
  HotelVote,
  ActivityVote
}
