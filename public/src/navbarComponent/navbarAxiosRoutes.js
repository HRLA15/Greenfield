import axios from 'axios'

module.exports = {

  getUserPendingTrips: (userId) => (
  //should return array of pendingTrips for a given userId
  axios.get(`http://localhost:3000/getUserPendingTrips/${userId}`)
  )
  
}