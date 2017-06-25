import React, { Component } from 'react'
import UserProfilePic from './UserProfilePic'
import UserProfileInfo from './UserProfileInfo'
import axiosRoutes from '../userHomePageComponent/UserHomeAxiosRoutes'

const dummyData = {
  id: 1,
  username: 'trumpin',
  firstName: 'Donald',
  lastName: 'Trump',
  email: 'MakeAmericaGreatAgain@trumpin.com',
  profilePic: []
}

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editPic: false,
      edit: false,
      userInfo: dummyData
    }
    //once server works do userInfo: this.props.userInfo

    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
    this.handleSavePicClick = this.handleSavePicClick.bind(this)
    this.handleEditPicClick = this.handleEditPicClick.bind(this)
    this.handleCancelEditPicClick = this.handleCancelEditPicClick.bind(this)
  }
  componentWillUnmount() {
    console.log('unmounted')
  }
  handleEditClick() {
    this.setState({
      edit: true
    })
  }

  handleCancelClick() {
    this.setState({
      edit: false
    })
  }

  handleSaveClick(stateObj) {
    // axiosRoutes.postUserProfileInfo(this.state.userInfo.id, stateObj)
    //   .then((res) => {
    //     this.setState({
    //     edit: false,
    //     userInfo: res.body
    //     })
    //   })
    //   .catch(err => console.log(err))

    //once server routes work uncomment above and delete lines below
    this.state.userInfo['username'] = stateObj.tempUsername
    this.state.userInfo['firstName'] = stateObj.tempFirstName
    this.state.userInfo['lastName'] = stateObj.tempLastName
    this.state.userInfo['email'] = stateObj.tempEmail
    
    this.setState({
      edit: false,
      userInfo: this.state.userInfo
    })
  }
  
  handleEditPicClick() {
    this.setState({
      editPic: true
    })
  }

  handleSavePicClick(savedPicArr) {
    // if(savedPicArr.length > 0) {
    //   axiosRoutes.postUserProfilePic(this.state.userInfo.id, savedPicArr[0].preview)
    //     .then((res) => {
    //       this.setState({
    //         userInfo: res.body,
    //         editPic: false
    //       })
    //     })
    //     .catch((err) => console.log(err))
    // }
    //once server routes work uncomment above and delete lines below
    if(savedPicArr.length > 0) {
      this.state.userInfo['profilePic'] = savedPicArr[0].preview
      this.setState({
        userInfo: this.state.userInfo,
        editPic: false
      })
    }
  }

  handleCancelEditPicClick() {
    this.setState({
      editPic: false
    })
  }
  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <UserProfilePic
          userInfo={this.state.userInfo}
          handleSavePicClick={this.handleSavePicClick}
          editPic={this.state.editPic}
          handleEditPicClick={this.handleEditPicClick}
          handleCancelEditPicClick={this.handleCancelEditPicClick}
        />
        <UserProfileInfo 
          handleEditClick={this.handleEditClick}
          handleSaveClick={this.handleSaveClick}
          handleCancelClick={this.handleCancelClick}
          userInfo={this.state.userInfo}
          edit={this.state.edit}
        />
      </div>
    )
  }
}
export default UserProfile