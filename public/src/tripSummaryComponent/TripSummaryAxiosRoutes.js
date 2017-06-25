import axios from 'axios'

module.exports = {
  getTripData: (tripId) => (
    //should return tripObj with trip data
    axios.get(`http://localhost:3000/getTripSummary/${tripId}`)
  ),
  getTripFriendsList: (tripId) => (
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
      url: activityInfo.url,
      longitude: activityInfo.longitude,
      latitude: activityInfo.latitude
    })
  ),
  deleteTripActivity: (activityId) => (
    //should be able to delete activity given the activity id
    axios.delete(`http://localhost:3000/deleteTripActivity/${activityId}`)
  ),
  postTripHotel: (tripId, hotelInfo) => (
    //should post one activity to match with the given tripId
    axios.post(`http://localhost:3000/postTripHotel/${tripId}`, {
      name: hotelInfo.name,
      address: hotelInfo.address,
      latitude: hotelInfo.latitude,
      longitude: hotelInfo.longitude
    })
  ),
  deleteTripHotel: (hotelId) => (
    //should be able to delete activity given the activity id
    axios.delete(`http://localhost:3000/deleteTripHotel/${hotelId}`)
  ),
  addVoteToHotel: (hotelId, userId) => (
    axios.post(`http://localhost:3000/addVoteToHotel/${hotelId}/${userId}/${creatorId}`)
  ),
  addVoteToActivity: (activityId, userId) => (
    axios.post(`http://localhost:3000/addVoteToHotel/${activityId}/${userId}/${creatorId}`)
  ),
  getTopFiveHotels: (tripId) => (
    axios.get(`http://localhost:3000/getTopFiveHotels/${tripId}`)
  ),
  getTopFiveActivities: (tripId) => (
    axios.get(`http://localhost:3000/getTopFiveActivities/${tripId}`)
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