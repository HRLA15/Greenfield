import React, { Component } from 'react'
import ConfirmedFriendsEntry from './ConfirmedFriendsEntry'
import axiosRoutes from './TripSummaryAxiosRoutes'

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

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Confirmed Friends:</td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.friends.map((friendObj) => (
              <ConfirmedFriendsEntry friend={friendObj}/>
            ))
          }
        </tbody>
      </table>
    )
  }

}

export default ConfirmedFriends