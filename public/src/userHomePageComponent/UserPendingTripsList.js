import React, { Component } from 'react'
import axios from 'axios'
import UserPendingTripEntry from './UserPendingTripEntry'
const dummyData = [
  {
    title: 'Maryland'
  },
  {
    title: 'New York'
  },
  {
    title: 'Washington D.C.'
  },
  {
    title: 'Chicago'
  },
  {
    title: 'Hawaii'
  }
]

class UserPendingTripsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pendingTrips: dummyData,
      toggle: false
    }

    this.handleEntryClick = this.handleEntryClick.bind(this)
  }
  
  handleEntryClick(pendingTrip) {
    //add redirect to the upcoming trip info page
    console.log('You will be redirected once our routers work', pendingTrip)
  }
  // componentWillMount() {
  //   axios.get(`/${props.user}/pendingTrips`)
  //     .then((res) => {
  //       this.setState({
  //         pendingTrips = res.body
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  render() {
    let pendingTripsList = null

    if(this.state.toggle) {
      pendingTripsList = (
        <table>
          {
            this.state.pendingTrips.map((pendingTrip) => (
              <UserPendingTripEntry pendingTrip={pendingTrip} handleEntryClick={this.handleEntryClick} />
            ))
          }
        </table>
      )
    }

    return (
      <div>
        <button onClick={() => (
          this.setState({
            toggle: !this.state.toggle
          })
        )}>Pending Trips!</button>
        {pendingTripsList}
      </div>
    )
  }
}

export default UserPendingTripsList