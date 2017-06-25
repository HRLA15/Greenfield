import axios from 'axios'
  
module.exports = {

  getOneUser: (idToken) => (
    //should return the userObj that matches auth0 token
    axios.get(`http://localhost:3000/getOneUser/${idToken}`)
  ),
  postUserProfilePic: (userId, imgUrl) => (
    //should post/update imgUrl of a given userid
    axios.post(`http://localhost:3000/postUserProfilePic/${userId}`, {
      url: imgUrl
    })
  ),
  postUserProfileInfo: (userId, userData) => (
    //should post/update userprofileinfo with a given userId
    axios.post(`http://localhost:3000/postUserProfileInfo/${userId}`, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email
    })
  )

}