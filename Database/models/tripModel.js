const Sequelize = require('sequelize')
const db = require('../config.js')



const Trips = db.define('trips',{
  title: Sequelize.STRING,
  destination: Sequelize.STRING,
  hotelTrips: Sequelize.ARRAY(Sequelize.STRING),
  activities: Sequelize.ARRAY(Sequelize.STRING),
  startDate: Sequelize.DATEONLY,
  endDate: Sequelize.DATEONLY,
  isCompleted: Sequelize.BOOLEAN,
  timestamps: false
})

Trips.sync()

// Trips.sync({ force: true})

module.exports = Trips

// CREATE TABLE HOTEL (
//   ID INT NOT NULL,
//   H_NAME string[],
//   H_Count integer[],
//   P_ID string,
//   primary key (ID)
// )

// CREATE TABLE TRIPS (
//   ID INTEGER,
//   USER_ID integer,
//   USER_ID_VOTERS integer[][],
//   TITLE string,
//   DESTINATION string,
//   DESCRIPTION string,
//   HOTELS string[][],
//   ACTIVITIES string[],
//   START_DATE date,
//   END_DATE date,
//   IS_COMPLETED boolean
// )

// CREATE TABLE USERS (
//   ID integer,
//   USER_NAME string,
//   PW string,
//   EMAIL string,
//   PRO_PIC string,
//   UPCOMING_TRIPS string[],
//   RESOLVED_TRIPS string[],
//   FIRST_NAME string,
//   LAST_NAME string,
//   FRIENDS string[]
// )

// INSERT INTO EXAMPLETABLE
// VALUES('MANISA',
// '{1,2,3,4'},
// '{{')