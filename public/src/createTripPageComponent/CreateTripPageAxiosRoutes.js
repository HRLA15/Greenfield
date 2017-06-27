import axios from 'axios'
module.exports = {
  // if you are editing use this call
  getTripData: (tripId) => (
    //should return tripObj with trip data
    axios.get(`http://localhost:3000/getTripSummary/${tripId}`)
  ),
  postTripInfo: (tripData) => (
    axios.post(`http://localhost:3000/postTripSummary`, {
      title: tripData.title,
      destination: tripData.destination,
      startDate: tripData.startDate,
      endDate: tripData.endDate,
      description: tripData.description,
      url: tripData.url,
      latitude: tripData.latitude,
      longitude: tripData.longitude
    })
  ),
  postUserTrip: (userId, tripId) => (
    axios.post(`http://localhost:3000/postUserTrip/${userId}/${tripId}`)
  ),
  editTripInfo: (tripData) => (
    axios.post(`http://localhost:3000/editTripSummary/${tripData.id}`, {
      title: tripData.title,
      destination: tripData.destination,
      startDate: tripData.startDate,
      endDate: tripData.endDate,
      description: tripData.description
    })
  ),
  //get friends from user for invite
  //query so we get all users that have not yet been invited to the trip
  // not including the triphost user id
  getUserFriends: (userId, tripId) => (
    axios.get(`http://localhost:3000/getUserFriends/${userId}/${tripId}`)
  ),
  //post invited friends
  addFriendToTrip: (userId, tripId, participantId) => (
    axios.post(`http://localhost:3000/addFriendToTrip/${userId}/${tripId}/${participantId}`)
  )
}