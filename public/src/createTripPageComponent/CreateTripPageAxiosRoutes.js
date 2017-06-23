import axios from 'axios'

module.exports = {

  //trip database ID TITLE DESTINATION START/END DATE
  //post tripname
  postTripInfo: (tripData) => (
    axios.post("http://localhost:3000/trips/", {
      title: tripData.title,
      destination: tripData.destination,
      startDate: tripData.startDate,
      endDate: tripData.endDate
    })
  ),
  //get friends from user for invite
  getUserFriends: () => (
    axios.get("http://localhost:3000/getUserFriends/")
  ),
  //post invited friends
  postInvitedFriends: () => (
    //send friendID and userID
    //
    axios.post("http://localhost:3000/postInvitedFriends/")
  )
}