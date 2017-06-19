import React, { Component } from 'react'
import UserProfilePic from './UserProfilePic'
import UserProfileInfo from './UserProfileInfo'

const dummyData = {
  name: 'Donald the GOAT',
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
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
    this.handleSavePicClick = this.handleSavePicClick.bind(this)
    this.handleEditPicClick = this.handleEditPicClick.bind(this)
    this.handleCancelEditPicClick = this.handleCancelEditPicClick.bind(this)
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
    this.state.userInfo['name'] = stateObj.tempFullName
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
    console.log(savedPicArr.length)
    if(savedPicArr.length > 0) {
      this.state.userInfo['profilePic'] = savedPicArr[0].preview
      this.setState({
        profilePic: this.state.userInfo,
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