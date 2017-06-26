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

const dummyData = [
  {
    name: 'Jon'
  },
  {
    name: 'Will'
  },
  {
    name: 'Mike'
  },
  {
    name: 'Jay'
  }
]
// will have tripId passed into props
// and has top hotel obj and top activities array passed in
class ConfirmedFriends extends Component {

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
    axiosRoutes.getTripFriendsList(this.props.tripId)
      .then((res) => {
        if(Array.isArray(res.data)) {
          this.setState({
            friends: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    // setTimeout(
    //   axiosRoutes.getTripFriendsList(this.props.tripId)
    //     .then((res) => {
    //       if(Array.isArray(res.data)) {
    //         this.setState({
    //           friends: res.data
    //         })
    //       }
    //     })
    //     .catch(err => console.log(err)),
    //   5000)
  }

  handleToggle() {
    this.setState({open: !this.state.open})
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
          return <li>{friend.participant.firstName} {friend.participant.lastName}</li>
          
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
          {/*<Card>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="images/jsa-128.jpg"
            />
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src={this.props.trip.url} alt="" />
            </CardMedia>
          </Card>*/}
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

export default ConfirmedFriends