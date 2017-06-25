import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import FlatButton from 'material-ui/FlatButton'

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
          style={{border: "solid 3px white", backgroundColor: "white", borderRadius: 10, height: 200 + "px", width: 200 + "px"}}
        >
          <img src={previewPic} style ={{marginLeft: 15 + "px", marginTop: 15 + "px", backgroundColor: "#f2f2f2", borderRadius: 100 + "%"}} width="150" height="150"/>
        </Dropzone>

        <FlatButton label="SAVE" primary={true} onClick={() => {
          this.props.handleSavePicClick(this.state.accepted)
        }}/>

        <FlatButton label="CANCEL" primary={true} onClick={() => {
          this.setState({
            accepted: []
          })
          this.props.handleCancelEditPicClick()
        }}/>

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




