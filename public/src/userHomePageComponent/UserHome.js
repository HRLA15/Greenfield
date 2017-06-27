import React, { Component } from 'react'
import Create from '../createTripPageComponent/Create'
import UserUpcomingTripsList from './UserUpcomingTripsList'
import UserPreviousTripsList from './UserPreviousTripsList'
import TripSummary from '../tripSummaryComponent/TripSummary'
import axiosRoutes from './UserHomeAxiosRoutes'
import { Redirect, Link } from 'react-router-dom'
import UserSideBar from './UserSideBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import UsersFriends from './UsersFriends'

//Style for Tabs
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class UserHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      userInfo: {},
      friends: [],
      display: false,
      myTrips: []
    }
    this.handleCreateTripButtonClick = this.handleCreateTripButtonClick.bind(this)
  }

  componentWillMount() {

    axiosRoutes.getAllUserCreatedTrips(localStorage.userId)
      .then((res)=> {
        this.setState({myTrips: res.data})
        console.log("myTrips: ", this.state.myTrips)
      })

    axiosRoutes.getUserFriends(localStorage.userId)
      .then((res) => {
        this.setState({friends: res.data[0].friend})
        console.log("Friends", this.state.friends)
      })

    axiosRoutes.getOneUser(localStorage.userSub)
      .then((res) => {
        this.setState({
          userInfo: res.data[0]
        })
      })
      .catch(err => console.log(err))
  }
  
  componentWillReceiveProps(nextProps) {
    axiosRoutes.getOneUser(localStorage.userSub)
      .then((res) => {
        this.setState({
          userInfo: res.data[0]
        })
      })
      .catch(err => console.log(err))
  }


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
    console.log('user id', this.props.userId)

    if(this.state.display === true) {
      return <div>
      <UsersFriends friends={this.state.friends} />
      </div>
    }

    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{flexGrow: 2, flexShrink: 3}}>
            <Tabs style ={{marginLeft: -10 + "%"}}>
            <Tab label="Upcoming Trips" style={{color: "black", backgroundColor: "white"}} >
              <div>
                <UserUpcomingTripsList redirect={this.goTo.bind(this)} userId={this.props.userId}/>
              </div>
            </Tab>
            <Tab label="Previous Trips" style={{color: "black", backgroundColor: "white"}}>
              <div>
                <UserPreviousTripsList redirect={this.goTo.bind(this)} userId={this.props.userId}/>
              </div>
            </Tab>
          </Tabs>
        </div>
          <div style={{flexGrow: 1, flexShrink: 1, marginTop: 45 + "px", marginLeft: 40 + "px"}}>
          <UserSideBar username={this.state.userInfo.username} friends={this.state.friends}/>
          </div>
        </div>
      </div>

    )
  }

}

export default UserHome