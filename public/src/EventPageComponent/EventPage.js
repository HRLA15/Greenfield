import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FriendsList from '../createTripPageComponent/FriendsList'

class EventPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <h1>Event Page</h1>
      <h2>Trip Name: {this.props.tripName}</h2>
      <span>Location: {this.props.location}</span>
      <p>Description: {this.props.description}</p>
      <h4>From: {this.props.fromDate}</h4>
      <h4>To: {this.props.toDate}</h4>
      <h5>Invited: {this.props.friends}</h5>
      </div>
    )
  }
}

export default EventPage