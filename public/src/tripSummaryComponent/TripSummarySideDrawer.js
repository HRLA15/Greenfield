import React, { Component } from 'react'
import axiosRoutes from './TripSummaryAxiosRoutes'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

class TripSummarySideDrawer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      friends: []
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  componentWillMount() {
    // gets the friends data as an array and sets the state
    axiosRoutes.getTripFriendsList(this.props.tripId)
      .then((res) => {
        console.log('friends data?', res.data)
        if(Array.isArray(res.data)) {
          this.setState({
            friends: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  // handles the toggling of the drawer when the trip summary button gets clicked
  handleToggle() {
    this.setState({open: !this.state.open})
    // calls the toggleHandler function in TripSummary.js which is used to keep the
    // side drawer with the most up to date data
    this.props.toggleHandler()
  }

  handleClose() {
    this.setState({open: false})
  }

  render() {
    return (
      <div>
        {this.state.friends.map(friend => {
          console.log("!!!!!KJEFBEUH", friend)
          return <RaisedButton disabled={true} style={{marginLeft: 20 + "px"}} label={friend.participant.firstName}/>
          
        })}
        <RaisedButton
          style={{marginLeft: 20 + "px"}}
          label="Trip Summary"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={'30%'} 
          openSecondary={true}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        {
          this.state.friends.map((friendObj) => (
            <MenuItem onTouchTap={this.handleClose}>{friendObj.participant.username}</MenuItem>
          ))
        }
        </Drawer>
      </div>
    )
  }

}

export default TripSummarySideDrawer