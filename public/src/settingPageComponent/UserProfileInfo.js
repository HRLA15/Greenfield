import React, { Component } from 'react'

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
      <div>
        <textarea rows="4" cols="50" readOnly>
          {`Username: ${this.props.userInfo.username}\nFirst Name: ${this.props.userInfo.firstName}\nLastName: ${this.props.userInfo.lastName}\nEmail: ${this.props.userInfo.email}`}
        </textarea>
        <button onClick={this.props.handleEditClick}>Edit</button>
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