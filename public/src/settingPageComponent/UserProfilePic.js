import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class UserProfilePic extends Component {
  constructor() {
    super()
    this.state = {
      accepted: [],
    }
}

  onDrop(accepted) {
    this.setState({
      accepted: accepted
    })
  }

  render() {
    let pic = null
    
    let previewPic = null

    if(this.props.userInfo.profilePic.length > 0 && this.state.accepted.length < 1) {
      previewPic = this.props.userInfo.profilePic
    }

    if(this.state.accepted.length > 0) {
      previewPic = this.state.accepted[0].preview
    }

    if(this.props.editPic || this.props.userInfo.profilePic.length < 1) {
      pic = (
      <div>
        <Dropzone
          accept="image/jpeg, image/png"
          onDrop={this.onDrop.bind(this)}
        >
          <p>Upload profile pic by either dropping a file here, or click to select file to upload.</p>
          <p>Only *.jpeg and *.png images will be accepted</p>
          <img src={previewPic} width="80" height="80"/>
        </Dropzone>
        <button onClick={() => {
          this.props.handleSavePicClick(this.state.accepted)
        }}>Save!</button>
        <button onClick={() => {
          this.setState({
            accepted: []
          })
          this.props.handleCancelEditPicClick()
          }}>Cancel</button>
      </div>
      )
    } else {
      pic = (
        <div>
        <img src={this.props.userInfo.profilePic} alt="Upload Your Picture.."/>
        <button onClick={this.props.handleEditPicClick}>Edit</button>
        </div>
      )
    }
    return (
      <div>
        {pic}
      </div>
    )
  }
}

export default UserProfilePic




