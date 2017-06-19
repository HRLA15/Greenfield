import React, { Component } from 'react'
import UserPreviousTripEntry from './UserPreviousTripEntry'

const dummyTripData = [
  {
    title: "Chinatown"
  },
  {
    title: "Koreatown"
  },
  {
    title: "Thaitown"
  },
  {
    title: "Taiwantown"
  }
]

class UserPreviousTripsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      previousTrips: dummyTripData
    }

    this.handleEntryClick = this.handleEntryClick.bind(this)
  }

  // componentWillMount() {
  //   axios.get()
  //     .then((res) => {
  //       this.setState({
  //         previousTrips: res.body
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  handleEntryClick(previousTrip) {
    //add redirect to the upcoming trip info page
    console.log('You will be redirected once our routers work', previousTrip)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              Previous Trips
            </th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.previousTrips.map((previousTrip) => (
              <UserPreviousTripEntry previousTrip={previousTrip} handleEntryClick={this.handleEntryClick}/>
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default UserPreviousTripsList