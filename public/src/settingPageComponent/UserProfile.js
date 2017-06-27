import React, { Component } from 'react'
import UserProfilePic from './UserProfilePic'
import UserProfileInfo from './UserProfileInfo'
import axiosRoutes from './SettingsPageAxiosRoutes'

// this page is unfinshed please finish the user profile to work

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editPic: false,
      edit: false,
      userInfo: {}
    }
    //once server works do userInfo: this.props.userInfo

    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
    this.handleSavePicClick = this.handleSavePicClick.bind(this)
    this.handleEditPicClick = this.handleEditPicClick.bind(this)
    this.handleCancelEditPicClick = this.handleCancelEditPicClick.bind(this)
  }
  // before the component fires the render function do a axios call to get
  // the users info stored in the database
  componentWillMount() {
    axiosRoutes.getOneUser(localStorage.userSub)
      .then((res) => {
        console.log(res.data)
        this.setState({
          userInfo: res.data[0]
        })
      })
      .catch(err => console.log(err))
  }

  // toggles 
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
    axiosRoutes.postUserProfileInfo(this.state.userInfo.id, stateObj)
      .then((res) => {
        this.setState({
        edit: false,
        userInfo: res.data[0]
        })
      })
      .catch(err => console.log(err))
  }
  
  handleEditPicClick() {
    this.setState({
      editPic: true
    })
  }

  handleSavePicClick(savedPicArr) {
    if(savedPicArr.length > 0) {
      axiosRoutes.postUserProfilePic(this.state.userInfo.id, savedPicArr[0].preview)
        .then((res) => {
          this.setState({
            userInfo: res.data[0],
            editPic: false
          })
        })
        .catch((err) => console.log(err))
    }
    //once server routes work uncomment above and delete lines below
    // if(savedPicArr.length > 0) {
    //   this.state.userInfo['profilePic'] = savedPicArr[0].preview
    //   this.setState({
    //     userInfo: this.state.userInfo,
    //     editPic: false
    //   })
    // }
  }

  handleCancelEditPicClick() {
    this.setState({
      editPic: false
    })
  }
  render() {
    return (
      <div>
        <h4 style={{marginLeft: 20 + "px"}}>User Profile</h4>
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