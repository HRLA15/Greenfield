import React, { Component } from 'react'
import ConfirmedFriends from './ConfirmedFriends'
import ActivityList from './ActivityList'
import NearbyHotels from './NearbyHotels'
import EditButton from './EditButton'
import axiosRoutes from './TripSummaryAxiosRoutes'
//title, destionation, startdate, enddate, isCompleted, userId
const trip = {
  id:1,
  destination: 'Paris',
  startDate: '10/25/2017',
  endDate: '10/27/2017',
  userId: 1
}

//TODOS:
//Make the edit button redirect to the createTripPage given the tripId


// trip summary will have tripid and userid passed in
class TripSummary extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isTripCreator: false,
      tripData: {}
    }
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this)
  }

  componentWillMount() {
    // axiosRoutes.getTripData(this.props.tripId)
    //   .then((res) => {
    //     if(res.body.userId === this.props.userId) {
    //       this.setState({
    //         isTripCreator: true
    //       })
    //     }
    //     this.setState({
    //       tripData: res.body
    //     })
    //   })
    //   .catch(err => console.log(err))

    //once server routes are set up uncomment above and delete lines below
    this.setState({
      tripData: trip
    })
  }

  handleEditButtonClick() {
    //<Link to={`/create/${tripId}`}></Link>
    //props.match.params.tripId
    // using router /create/:tripId
    console.log('LINK BACK TO THE CREATE PAGE')
  }

  render() {
    let editButton = null

    if(this.state.isTripCreator) {
      editButton = <EditButton handleEditButtonClick={this.handleEditButtonClick} />
    }

    return (
      <div>
      
        <h1>{this.state.tripData.title}</h1>
        <h4>{`Start Date: ${this.state.tripData.startDate} End Date: ${this.state.tripData.endDate}`}</h4>
        <p>{this.state.tripData.destination}</p>
      
      {editButton}
      <ConfirmedFriends tripId={this.state.tripData.id} />
      <ActivityList tripId={this.state.tripData.id} />
      <NearbyHotels tripId={this.state.tripData.id} />
      </div>
    )

  }
}

export default TripSummary