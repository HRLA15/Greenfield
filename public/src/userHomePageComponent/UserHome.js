import React, { Component } from 'react'
import Create from '../createTripPageComponent/Create'
import CreateTripButton from './CreateTripButton'
import UserUpcomingTripsList from './UserUpcomingTripsList'
import UserPendingTripsList from './UserPendingTripsList'
import UserPreviousTripsList from './UserPreviousTripsList'
import UserProfile from './UserProfile'
import TripSummary from '../tripSummaryComponent/TripSummary'
import axiosRoutes from './UserHomeAxiosRoutes'

//TODOS:

class UserHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      userInfo: {}
    }

    this.handleCreateTripButtonClick = this.handleCreateTripButtonClick.bind(this)
  }

  //once servers are working and auth0token is given uncomment below
  // componentWillMount() {
  //   axiosRoutes.getOneUser(auth0Token)
  //     .then((res) => {
  //       this.setState({
  //         userInfo: res.body
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }

  handleCreateTripButtonClick() {
    this.setState({
      redirect: !this.state.redirect
    })
  }

  render() {
    let clicked = this.state.redirect

    let redirect = null

    if(clicked) {
      redirect = <Create />
    } else {
      redirect = (
        <div>
          <UserProfile />
          <UserUpcomingTripsList />
          <UserPreviousTripsList />
          <UserPendingTripsList />
          <CreateTripButton handleCreateTripButtonClick={this.handleCreateTripButtonClick} />
        </div>
      )
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