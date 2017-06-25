import React, { Component } from 'react'
import Create from '../createTripPageComponent/Create'
import CreateTripButton from './CreateTripButton'
import UserUpcomingTripsList from './UserUpcomingTripsList'
import UserPreviousTripsList from './UserPreviousTripsList'
import TripSummary from '../tripSummaryComponent/TripSummary'
import axiosRoutes from './UserHomeAxiosRoutes'
import { Redirect, Link } from 'react-router-dom'
import UserSideBar from './UserSideBar'
//TODOS:

const dummyData = {
  id: 1,
  name: 'Jon',

}
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
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  handleCreateTripButtonClick() {
    this.setState({
      redirect: !this.state.redirect
    })
  }

  render() {
    let clicked = this.state.redirect

    // if(clicked) {
    //   return (
    //     <Redirect to={{
    //     pathname: '/create'
    //     }}/>
    //   )
    // }

    return (
      <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
<<<<<<< HEAD
        <div style={{flexGrow: 5, flexShrink: 5}}>
        <UserUpcomingTripsList redirect={this.goTo.bind(this)}/>
=======
        <div style={{flexGrow: 1, flexShrink: 1}}>
        <UserUpcomingTripsList />
>>>>>>> "Updated user profile page"
        <UserPreviousTripsList />
        </div>
        <div style={{flexGrow: 1, flexShrink: 1}}>
        <UserSideBar />
        </div>
      </div>
      </div>
    )
  }

}

export default UserHome