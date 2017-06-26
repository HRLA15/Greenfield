import axios from 'axios'

module.exports = {

  // if you are editing use this call
  getTripData: (tripId) => (
    //should return tripObj with trip data
    axios.get(`http://localhost:3000/getTripSummary/${tripId}`)
  ),
  //trip database ID TITLE DESTINATION START/END DATE
  //post tripname
  // 
  postTripInfo: (tripData) => (
    axios.post(`http://localhost:3000/postTripSummary`, {
      title: tripData.title,
      destination: tripData.destination,
      startDate: tripData.startDate,
      endDate: tripData.endDate,
      description: tripData.description
    })
  },
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
  getUserFriends: (userId) => (
    axios.get(`http://localhost:3000/getUserFriends/${userId}`)
  ),
  //post invited friends
  postInvitedFriends: (invitedFriendsArr, tripId) => (
    axios.post(`http://localhost:3000/postInvitedFriends/${tripId}`), {
      invitedFriendsArr: invitedFriendsArr
    }
  )
}