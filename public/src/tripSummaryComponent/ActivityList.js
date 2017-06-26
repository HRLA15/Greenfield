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
    this.state = {
      activityList: []
    }
    this.handleVoteClick = this.handleVoteClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
        if(nextProps.toggle !== this.state.toggle) {
          this.setState({
            toggle: nextProps.toggle
          })

          axiosRoutes.getTopFiveActivities(this.props.tripId)
          .then((res) => {
            if(Array.isArray(res.data)) {
              let topActivitiesArr = []

              if(res.data.length > 3) {
                topActivitiesArr = res.data.slice(0,3)
              } else {
                topActivitiesArr = res.data.slice(0, res.data.length)
              }
              this.props.getTopActivities(topActivitiesArr)
            }
          })
          .catch(err => console.log(err))

          axiosRoutes.getTripActivities(this.props.tripId)
            .then((res) => {
              if(Array.isArray(res.data[0].activities)) {
                this.setState({
                  activityList: res.data[0].activities
                })
            }
            })
            .catch(err => console.log(err))

        }
  }

  componentDidMount() {
      this.setState({
        toggle: !this.props.toggle
      })
  }

  handleVoteClick(activityId) {
    console.log('you voted')
    axiosRoutes.addVoteToActivity(activityId, this.props.userId)
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