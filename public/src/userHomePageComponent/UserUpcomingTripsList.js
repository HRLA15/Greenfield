import React, { Component } from 'react'
import UserUpcomingTripEntry from './UserUpcomingTripEntry'

const dummyTripData = [
  {
    title: "Let's go to Peru!!",
    destination: "Peru",
    description: "Cha Cha",
    startDate: "10/09/17",
    endDate: "10/11/17"
  },
  {
    title: "Next Stop Mexico",
    destination: "Mexico",
    description: "Buenos Dias",
    startDate: "11/16/17",
    endDate: "11/20/17"
  },
  {
    title: "California Love",
    destination: "California",
    description: "Cali Drow",
    startDate: "10/30/15",
    endDate: "11/11/15"
  },
  {
    title: "The Great Wall",
    destination: "China",
    description: "NiHou",
    startDate: "11/09/17",
    endDate: "11/11/18"
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