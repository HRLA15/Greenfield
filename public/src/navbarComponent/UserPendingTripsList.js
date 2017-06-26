import React, { Component } from 'react'
import axios from 'axios'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import SocialNotificationActive from 'material-ui/svg-icons/social/notifications-active'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'
import { Redirect } from 'react-router-dom'
import axiosRoutes from './navbarAxiosRoutes'

const dummyData = [
  {
    title: 'Maryland',
    id: 1
  },
  {
    title: 'New York',
    id: 2
  },
  {
    title: 'Washington D.C.',
    id: 3
  },
  {
    title: 'Chicago',
    id: 4
  },
  {
    title: 'Hawaii',
    id: 5
  }
]
//TODOS:
//Add a confirm button click handler that will delete trip from pendingtrips and add to upcomingtrips
//Add a unconfirm button click handler that will delete trip from pendingtrips
//Finish handleEntryClick??

class PendingTrips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pendingTrips: []
    }

    this.handleEntryClick = this.handleEntryClick.bind(this)
  }

  handleUpdate() {
    axiosRoutes.getUserPendingTrips(this.props.userId)
      .then((res) => {
        if(Array.isArray(res.data)) {
          this.setState({
            pendingTrips: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  handleEntryClick(pendingTripId) {
    //add redirect to the upcoming trip info page
    this.props.router(`event/${pendingTripId}`)
    // return(
    // <Redirect to="/event"
    // />
    // )
  }

  render() {

    return (
    <IconMenu
      iconButtonElement={<IconButton><SocialNotificationActive onClick={() => this.handleUpdate.apply(this)} hoverColor={red500}/></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      {
        this.state.pendingTrips.map((pendingTrip) => (
          <MenuItem 
            primaryText={pendingTrip.title}
            onClick={() => (this.handleEntryClick(pendingTrip.id))}
          />
        ))
      }
    </IconMenu>
    )
  }
}


export default PendingTrips