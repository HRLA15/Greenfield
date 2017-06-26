import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import {orange500, blue500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'

const textFieldStyles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
}

class UserProfileInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tempUsername: this.props.userInfo.username,
      tempFirstName: this.props.userInfo.firstName,
      tempLastName: this.props.userInfo.lastName,
      tempEmail: this.props.userInfo.email
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const name = target.name

    this.setState({
      [name]: target.value
    });
  }

  render() {

    let display = null

    if(this.props.edit) {
      display = (
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.handleSaveClick(this.state)
        }}>
        <label>
          Username:
          <input
            name="tempUsername"
            type="text"
            placeholder={this.props.userInfo.username}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          First Name:
          <input
            name="tempFirstName"
            type="text"
            placeholder={this.props.userInfo.firstName}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input
            name="tempLastName"
            type="text"
            placeholder={this.props.userInfo.lastName}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            name="tempEmail"
            type="email"
            placeholder={this.props.userInfo.email}
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Save" />
        <button onClick={() => {
          this.setState({
            tempUsername: this.props.userInfo.username,
            tempFirstName: this.props.userInfo.firstName,
            tempLastName: this.props.userInfo.lastName,
            tempEmail: this.props.userInfo.email
          })
          this.props.handleCancelClick()
        }}>Cancel</button>
      </form>
      
      )
    } else {
      display = (
      <div style={{marginLeft: 20 + "px"}}>
        <TextField
          defaultValue= {this.props.userInfo.username}
          hintText="Username"
          floatingLabelText="Username"
          floatingLabelFixed={true}
        /><br />
        <TextField
          defaultValue= {this.props.userInfo.firstName}
          hintText="First Name"
          floatingLabelText="First Name"
          floatingLabelFixed={true}
        /><br />
        <TextField
          defaultValue= {this.props.userInfo.lastName}
          hintText="Last Name"
          floatingLabelText="Last Name"
          floatingLabelFixed={true}
        /><br />
        <TextField
          defaultValue= {this.props.userInfo.email}
          hintText="Email"
          floatingLabelText="Email"
          floatingLabelFixed={true}
        /><br />
        {/*<textarea rows="4" cols="50" readOnly>
          {`Username: ${this.props.userInfo.username}\nFirst Name: ${this.props.userInfo.firstName}\nLastName: ${this.props.userInfo.lastName}\nEmail: ${this.props.userInfo.email}`}
        </textarea>*/}
        {/*<FlatButton label="Edit" primary={true} onClick={this.props.handleEditClick}/>*/}
      </div>
      )
    }

    return (
      <div>
        {display}
      </div>
    )
  }
}

export default UserProfileInfo