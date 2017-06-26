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
  latitude:{
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: true,
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
    type: Sequelize.TEXT,
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
    // defaultValue: 0, -- cant' default it ot 0 because it will change to null when you do a create function -- I did a raw sql funciton for it in the tripcontroller file.. same goes for activities
  },
}, {
  timestamps: false,
})
const ActivityVote = db.define('activityvote', {
  vote: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
}, {
  timestamps: false,
})
// RELATIONSHIPS
// //////////////////////////////////////////////////////////////////////////////////*/
// Created a Join Table 'UserTrip' thru the foreign keys tripId and userID
UserTrip.belongsTo(Trip, { through: UserTrip, foreignKey: {name: 'tripId', unique: false }});
UserTrip.belongsTo(User, { through: UserTrip, foreignKey: {name: 'userId', unique: false }});
// THERE IS A BUG WITH SEQUELIZE WHEN YOU HAVE TO HAVE MORE THAN 2 FOREIGN KEYS IN A TABLE, 
//it says that the foreign keys have to be unique 
//Link: https://github.com/sequelize/sequelize/issues/3220 ... work around up top
      // THIS IS THE ORIGINAL CODE THAT SHOULD WORK, but when adding participants/friends to the usertrip table it gets and error 
// User.belongsToMany(Trip, { through: UserTrip, foreignKey: {name: 'userId', unique: false });
// Trip.belongsToMany(User, { through: UserTrip, foreignKey: 'tripId', unique: false });
// 1:M relationship between trip/hotel
Trip.hasMany(Hotel);
Hotel.belongsTo(Trip);
// 1:M relationship between trip/activity
Trip.hasMany(Activity);
Activity.belongsTo(Trip);
// 1:1 relationship between HotelVote and User
User.hasOne(HotelVote);
HotelVote.belongsTo(User);
/*////////////////////////////////////////////////////////////////////////////////////////////
                                      IMPORTANT
- USER in our case refers to the person that created the trip
- the alias' friend and participant friendvote and activityvote all refer to the friend the 
- user has added (basically refers to everyone except the creator of the trip)
 //////////////////////////////////////////////////////////////////////////////////////////*/
// 1:1 relationship between HotelVote and the invited participant
HotelVote.belongsTo(User, {as: 'friendvote', foreignKey: {name: 'friendId', unique: false}})
// 1:M relationship between HotelVote/Hotel
Hotel.hasMany(HotelVote);
HotelVote.belongsTo(Hotel);
// 1:1 relationship between ActivityVote and User
User.hasOne(ActivityVote);
ActivityVote.belongsTo(User);
// 1:1 relationship between ActivityVote and invited participant
ActivityVote.belongsTo(User, {as: 'activityvote', foreignKey: {name: 'friendId', unique: false}})
// 1:M relationship between ActivityVote/Activity
Activity.hasMany(ActivityVote);
ActivityVote.belongsTo(Activity);
// M:M relationship between the users associatied thru JOIN TABLE 'USERFRIEND' aliased as 'friend'
User.belongsToMany(User, {as: 'friend', through: UserFriend, unique: false})
// M:M relationship between UserTrip/invited participant thru JOIN TABLE USERTRIP
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
