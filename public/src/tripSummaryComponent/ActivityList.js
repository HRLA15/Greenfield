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
    //     })
    //     .catch(err => console.log(err))
    // }
    // , 1000)
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
                <ActivityListEntry activity={activity} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ActivityList