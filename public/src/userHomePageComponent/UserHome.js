import React, { Component } from 'react'
import Create from '../createTripPageComponent/Create'
import CreateTripButton from './CreateTripButton'

class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }

    this.handleCreateTripButtonClick = this.handleCreateTripButtonClick.bind(this)
  }

  handleCreateTripButtonClick() {
    this.setState({
      redirect: !this.state.redirect
    })
  }

  render() {
    const clicked = this.state.redirect

    let redirect = null

    if(clicked) {
      redirect = <Create />
    } else {
      redirect = <CreateTripButton handleCreateTripButtonClick={this.handleCreateTripButtonClick} />
    }

    return (
      <div>
        <h1>TRIP PLANNER</h1>
        {redirect}
      </div>
    )
  }

}

export default UserHome