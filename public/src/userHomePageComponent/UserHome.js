import React, { Component } from 'react'
import Create from '../createTripPageComponent/Create'
import CreateTripButton from './CreateTripButton'
import UserUpcomingTripsList from './UserUpcomingTripsList'
import UserPreviousTripsList from './UserPreviousTripsList'
import TripSummary from '../tripSummaryComponent/TripSummary'
import axiosRoutes from './UserHomeAxiosRoutes'
import { Redirect } from 'react-router-dom'
import UserSideBar from './UserSideBar'
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
  //   axiosRoutes.getOneUser(localStorage.id_token)
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

    if(clicked) {
      return (
        <Redirect to={{
        pathname: '/create'
        }}/>
      )
    }

    return (
      <div>
        <div>
        <UserUpcomingTripsList />
        <UserPreviousTripsList />
        </div>
        <div>
        <UserSideBar />
        </div>
        {/*<CreateTripButton handleCreateTripButtonClick={this.handleCreateTripButtonClick} />*/}
      </div>
    )
  }

}

export default UserHome