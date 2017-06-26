import axios from 'axios'

module.exports = {
  getTripData: (tripId) => (
    //should return tripObj with trip data
    axios.get(`http://localhost:3000/getTripSummary/${tripId}`)
  ),
  getTripFriendsList: (userId, tripId) => (
    //should return array of users/friends obj that are confirmed for given trip
    axios.get(`http://localhost:3000/getTripFriendsList/${tripId}`)
  ),
  getTripNearbyHotels: (tripId) => (
    //should return array of hotel obj for a given tripId
    axios.get(`http://localhost:3000/getTripNearbyHotels/${tripId}`)
  ),
  getTripActivities: (tripId) => (
    //should return array of activityo obj for a given tripId
    axios.get(`http://localhost:3000/getTripActivities/${tripId}`)
  ),
  postTripActivity: (tripId, activityInfo) => (
    //should post one activity to match with the given tripId
    axios.post(`http://localhost:3000/postTripActivity/${tripId}`, {
      name: activityInfo.name,
      address: activityInfo.address,
      url: activityInfo.photo,
    })
  ),
  postTripHotel: (tripId, hotelInfo) => (
    //should post one activity to match with the given tripId
    axios.post(`http://localhost:3000/postTripHotel/${tripId}`, {
      name: hotelInfo.name,
      address: hotelInfo.address,
      url: hotelInfo.photo
    })
  ),
  addVoteToHotel: (hotelId, userId) => (
    axios.post(`http://localhost:3000/addVoteToHotel/${hotelId}/${userId}`)
  ),
  addVoteToActivity: (activityId, userId) => (
    axios.post(`http://localhost:3000/addVoteToHotel/${activityId}/${userId}`)
  ),
  deleteUserPendingTrip: (userId, tripId) => (
  //should remove pendingTripObj from pendingTrip table given the tripId
    axios.delete(`http://localhost:3000/deleteUserPendingTrip/${userId}/${tripId}`)
  ),
  postUserUpcomingTrips: (tripId, tripData) => (
  //should post a trip into the userUpcomingTrip given the tripId and tripData
    axios.post(`http://localhost:3000/postUserUpcomingTrips/${tripId}`, {
      trip: tripData
    })
  )
}