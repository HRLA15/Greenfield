import React, { Component } from 'react'
import ActivityListEntry from './ActivityListEntry'
import axiosRoutes from './TripSummaryAxiosRoutes'

const dummyData = [
  {
    id: 1,
    name: 'Hiking',
    tripId: 1
  },
  {
    id: 2,
    name: 'Fishing',
    tripId: 1
  },
  {
    id: 1,
    name: 'Bouldering',
    tripId: 1
  },

]

//TODOS: 
// add a input field where users can post an activity to the trip
// allow users to delete their own posted activity?
class ActivityList extends Component {

  constructor(props) {
    super(props)
  
    this.handleVoteClick = this.handleVoteClick.bind(this)
  }

  componentWillMount() {
    // make axios call using this.props.tripId to get all activities for a trip
    // then set state
    // axiosRoutes.getTripActivities(this.props.tripId)
    //   .then((res) => {
    //     this.setState({
    //       activityList: res.data
    //     })
    //   })
    //   .catch(err => console.log(err))

    //delete below and uncomment above once servers work
    this.setState({
      activityList: dummyData
    })
  }

  componentDidMount() {
    // setInterval(() => {
    //   axiosRoutes.getTripActivities(this.props.tripId)
    //     .then((res) => {
    //       this.setState({
    //         activityList: res.data
    //       })

    //       let topActivitiesArr = []

    //       if(res.data.length > 3) {
    //         topActivitiesArr = res.data.slice(0,3)
    //       } else {
    //         topActivitiesArr = res.data.slice(0, res.data.length)
    //       }
    //       this.props.getTopActivities(topActivitiesArr)
    //     })
    //     .catch(err => console.log(err))
    // }
    // , 1000)
  }

  handleVoteClick(activityId) {
    console.log('you voted')
    axiosRoutes.addVoteToHotel(activityId, this.props.userId, this.props.creatorId)
      .then((res) => {
        alert('Thanks for Voting!')
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Activity List:</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.activityList.map((activity) => (
                <ActivityListEntry activity={activity} handleVoteClick={this.handleVoteClick}/>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ActivityList