import React, { Component } from 'react'
import axiosRoutes from './TripSummaryAxiosRoutes'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
    console.log('confirmed friends props', this.props)
    axiosRoutes.getTripFriendsList(this.props.tripId)
      .then((res) => {
        console.log('friends data?', res.data[0].participant.username)
        if(Array.isArray(res.data)) {
          console.log('is an array')
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
  }

  handleClose() {
    this.setState({open: false})
  }

  render() {
    return (
      <div>
        <RaisedButton
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
        <h1>{console.log("TOP HOTEL", this.props.topHotel)}</h1>

         <Card>
            <CardHeader
              title={this.props.topHotel.title}
              subtitle="Subtitle"
              avatar="images/jsa-128.jpg"
            />
            <CardMedia
              overlay={<CardTitle title={this.props.topHotel.title} subtitle="Overlay subtitle" />}
            >
              <img src={this.props.topHotel.url} alt="" />
            </CardMedia>
          </Card>

        {this.props.topHotel.title}

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