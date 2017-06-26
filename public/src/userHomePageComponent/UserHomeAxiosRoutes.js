import axios from 'axios'

module.exports = {

  getOneUser: (idToken) => (
    //should return the userObj that matches auth0 token
    axios.get(`http://localhost:3000/getOneUser/${idToken}`)
  ),
  postNewUser: (idToken) => (
    axios.post(`http://localhost:3000/postNewUser`, {
      idToken: idToken
    })
  ),
  getUserUpcomingTrips: (userId) => (
    //should return array of upcomingTrips for a given userId
    axios.get(`http://localhost:3000/getUserUpcomingTrips/${userId}`)
  ),
  getAllUserCreatedTrips: (userId) => (
    // should return array of upcoming trips that user created
    axios.get(`http://localhost:3000/getAllUserCreatedTrips/${userId}`)
  ),
  getUserPreviousTrips: (userId) => (
    //should return array of previousTrips for a given userId
    axios.get(`http://localhost:3000/getUserPreviousTrips/${userId}`)
  ),
  getUserFriends: (userId) => (
    axios.get(`http://localhost:3000/getUserFriends/${userId}`)
  )
  
}

// id, firstname, lastname, email, idtoken