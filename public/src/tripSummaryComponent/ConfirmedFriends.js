import React, { Component } from 'react'
import axiosRoutes from './TripSummaryAxiosRoutes'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

const dummyData = [
  'Jon',
  'Will',
  'Jay',
  'Mike'
]
// will have tripId passed into props
class ConfirmedFriends extends Component {

  constructor(props) {
    super(props)
    this.state = {open: false}

    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentWillMount() {
    // axiosRoutes.getTripFriendsList(this.props.tripId)
    //   .then((res) => {
    //     this.setState({
    //       friends: res.body
    //     })
    //   })
    //   .catch(err => console.log(err))

    //uncomment above and delete lines below once servers are set up
    this.setState({
      friends: dummyData
    })
  }

  componentDidMount() {
    // setTimeout(
    //   axiosRoutes.getTripFriendsList(this.props.tripId)
    //     .then((res) => {
    //       this.setState({
    //         friends: res.body
    //       })
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
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200} 
          openSecondary={true}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        {
          this.state.friends.map((friendObj) => (
            <MenuItem onTouchTap={this.handleClose}>{this.state.friends.name}</MenuItem>
          ))
        }
        </Drawer>
      </div>
    )
  }

}

export default ConfirmedFriends