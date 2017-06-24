import axios from 'axios'

module.exports = {

  //trip database ID TITLE DESTINATION START/END DATE
  //post tripname
  postTripInfo: (tripData) => (
    axios.post("http://localhost:3000/postTripSummary", {
      title: tripData.title,
      destination: tripData.destination,
      startDate: tripData.startDate,
      endDate: tripData.endDate,
      description: tripData.description
    })
  ),
  //get friends from user for invite
  getUserFriends: () => (
    axios.get("http://localhost:3000/getUserFriends/1")
  ),
  //post invited friends
  postInvitedFriends: () => (
    //send friendID and userID
    //
    axios.post("http://localhost:3000/postInvitedFriends/")
  )
}