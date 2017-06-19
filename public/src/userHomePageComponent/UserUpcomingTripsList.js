import React, { Component } from 'react'
import UserUpcomingTripEntry from './UserUpcomingTripEntry'

const dummyTripData = [
  {
    title: "Let's go to Peru!!"
  },
  {
    title: "Next Stop Mexico"
  },
  {
    title: "California Love"
  },
  {
    title: "The Great Wall"
  }
]

class UserUpcomingTripsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      upcomingTrips: dummyTripData
    }

    this.handleEntryClick = this.handleEntryClick.bind(this)
  }

  // componentWillMount() {
  //   axios.get()
  //     .then((res) => {
  //       this.setState({
  //         upcomingTrips: res.body
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  handleEntryClick(upcomingTrip) {
    //add redirect to the upcoming trip info page
    console.log('You will be redirected once our routers work', upcomingTrip)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              Upcoming Trips
            </th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.upcomingTrips.map((upcomingTrip) => (
              <UserUpcomingTripEntry upcomingTrip={upcomingTrip} handleEntryClick={this.handleEntryClick}/>
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default UserUpcomingTripsList