import React, { Component } from 'react'
import axiosRoutes from './TripSummaryAxiosRoutes'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

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
        console.log('friends data?', res.data)
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
        {
          this.state.friends.map((friendObj) => (
            <MenuItem onTouchTap={this.handleClose}>{friendObj.name}</MenuItem>
          ))
        }
        </Drawer>
      </div>
    )
  }

}

export default ConfirmedFriends