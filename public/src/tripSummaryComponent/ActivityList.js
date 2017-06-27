import React, { Component } from 'react'
import ActivityListEntry from './ActivityListEntry'
import axiosRoutes from './TripSummaryAxiosRoutes'

class ActivityList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activityList: []
    }
    this.handleVoteClick = this.handleVoteClick.bind(this)
  }

  // this function fires when a new parent prop is passed down to this component
  componentWillReceiveProps(nextProps) {
        // this is using the parent toggle state to create its own toggle
        // to update the DOM with the most up to date list of trip activities
        // the parent toggle is getting manipulated by toggleHandler in 
        // tripSummary.js and getting passed down as a prop
        if(nextProps.toggle !== this.state.toggle) {
          this.setState({
            toggle: nextProps.toggle
          })

          axiosRoutes.getTopFiveActivities(this.props.tripId)
          .then((res) => {
            if(Array.isArray(res.data)) {
              let topActivitiesArr = []
              // makes a call to the database to get the activity list
              // which is given in order from highest vote to lowest vote
              // and given in an array 
              if(res.data.length > 3) {
                topActivitiesArr = res.data.slice(0,3)
              } else {
                topActivitiesArr = res.data.slice(0, res.data.length)
              }
              // uses the parent function to set state of the parent component
              // topActivities array. The function is in tripSummary.js and
              // state called topActivities is also in tripSummary.js
              this.props.getTopActivities(topActivitiesArr)
            }
          })
          .catch(err => console.log(err))
          // gets all the trip activities of a given trip, but it is not in order
          // and sets this components activityList state with the data given
          // which is used to render the activity list on the events page
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

  // this toggle is used to update the DOM with the latest data when a user either
  // adds trip to suggestions or clicks the trip summary button
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