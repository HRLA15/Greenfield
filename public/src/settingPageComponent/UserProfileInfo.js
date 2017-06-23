import React, { Component } from 'react'

class UserProfileInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tempFullName: this.props.userInfo.name,
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
          Full Name:
          <input
            name="tempFullName"
            type="text"
            placeholder={this.props.userInfo.name}
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
            tempFullName: this.props.userInfo.name,
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
          {`Full Name: ${this.props.userInfo.name}\nEmail: ${this.props.userInfo.email}`}
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