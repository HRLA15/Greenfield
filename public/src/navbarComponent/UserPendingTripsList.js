import React, { Component } from 'react'
import axios from 'axios'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import SocialNotificationActive from 'material-ui/svg-icons/social/notifications-active'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'
import { Redirect } from 'react-router-dom'
import axiosRoutes from './navbarAxiosRoutes'

class PendingTrips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pendingTrips: []
    }

    this.handleEntryClick = this.handleEntryClick.bind(this)
  }
  // when the user clicks the pending ringer bell button on the nav bar it updates
  // component to render the most up to date list of pending trips of a user
  handleUpdate() {
    axiosRoutes.getUserPendingTrips(this.props.userId)
      .then((res) => {
        if(Array.isArray(res.data)) {
          this.setState({
            pendingTrips: [res.data[0].trip]
          })
        }
      })
      .catch(err => console.log(err))
  }
  // is used to redirect the user to the event page of a pending trip when clicking
  // on the pending trip entry on the navbar
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