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
  postTripActivity: (tripId) => (
    //should post one activity to match with the given tripId
    axios.post(`http://localhost:3000/postUserUpcomingTrips/${tripId}`, {
      trip: tripData
    })
  ),
  deleteTripActivity: (activityId) => (
    //should be able to delete activity given the activity id
    axios.get(`http://localhost:3000/deleteTripActivity/${activityId}`)
  )
}