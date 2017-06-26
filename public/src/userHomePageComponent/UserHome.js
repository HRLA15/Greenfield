import React, { Component } from 'react'
import Create from '../createTripPageComponent/Create'
import CreateTripButton from './CreateTripButton'
import UserUpcomingTripsList from './UserUpcomingTripsList'
import UserPreviousTripsList from './UserPreviousTripsList'
import TripSummary from '../tripSummaryComponent/TripSummary'
import axiosRoutes from './UserHomeAxiosRoutes'
import { Redirect, Link } from 'react-router-dom'
import UserSideBar from './UserSideBar'
import {Tabs, Tab} from 'material-ui/Tabs'
//TODOS:

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
      userInfo: {}
    }

    this.handleCreateTripButtonClick = this.handleCreateTripButtonClick.bind(this)
  }

  //once servers are working and auth0token is given uncomment below
  componentWillMount() {
    axiosRoutes.getOneUser(localStorage.id_token)
      .then((res) => {
        this.setState({
          userInfo: res.data[0]
        })
      })
      .catch(err => console.log(err))
  }
  
  componentWillReceiveProps(nextProps) {
    axiosRoutes.getOneUser(localStorage.id_token)
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
    // if(clicked) {
    //   return (
    //     <Redirect to={{
    //     pathname: '/create'
    //     }}/>
    //   )
    // }

    return (
      <div>
        {/*<UserUpcomingTripsList redirect={this.goTo.bind(this)} userId={this.props.userId}/>
        <UserPreviousTripsList redirect={this.goTo.bind(this)} userId={this.props.userId}/>
        <UserUpcomingTripsList redirect={this.goTo.bind(this)}/>*/}
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
          <UserSideBar />
          </div>
        </div>
      </div>

    )
  }

}

export default UserHome