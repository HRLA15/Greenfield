import React, { Component } from 'react'
import ConfirmedFriends from './ConfirmedFriends'
import ActivityList from './ActivityList'
import NearbyHotels from './NearbyHotels'
import EditButton from './EditButton'
import axiosRoutes from './TripSummaryAxiosRoutes'
import { Redirect } from 'react-router-dom'
import GMapQuerySelect from './GMapQuerySelect'
import GoogleMap from './GoogleMap'
import PendingList from './PendingList'
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
      tripData: {},
      pendingList :[],
      querySelection:'',
      topHotel: {},
      topActivities: []
    }
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this)
    this.handleAddToPending = this.handleAddToPending.bind(this)
    this.getTopHotel = this.getTopHotel.bind(this)
    this.getTopActivities = this.getTopActivities.bind(this)
  }

  componentWillMount() {
    axiosRoutes.getTripData(this.props.match.params.tripId)
      .then((res) => {
        console.log('tripdata', res.data)
        if(res.data.userId === this.props.userId) {
          this.setState({
            isTripCreator: true
          })
        }
        this.setState({
          tripData: res.data[0]
        })
      })
      .catch(err => console.log(err))

  }
  
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  componentWillReceiveProps(nextProps) {
    axiosRoutes.getTripData(nextProps.match.params.tripId)
      .then((res) => {
        if(res.data.userId === nextProps.userId) {
          this.setState({
            isTripCreator: true
          })
        }
        this.setState({
          tripData: res.data[0]
        })
      })
      .catch(err => console.log(err))

  }

  handleEditButtonClick() {
    //<Link to={`/create/${tripId}`}></Link>
    //props.match.params.tripId
    // using router /create/:tripId
    this.goTo.call(this, `edit/${this.state.tripData.id}`)
    console.log('LINK BACK TO THE CREATE PAGE')
  }

  handleAddToPending(){
    this.state.pendingList.push(this.state.hotelClicked);
  }

  getTopHotel(topHotel) {
    this.setState({
      topHotel: topHotel
    })
  }

  getTopActivities(topActivitiesArr) {
    this.setState({
      topActivities: topActivitiesArr
    })
  }

  render() {    
    
    const { isAuthenticated } = this.props.auth

    if(!isAuthenticated()) {
      return (
        <Redirect to={{
        pathname: '/'
        }}/>
      )
    }

    let editButton = null

    if(this.state.isTripCreator) {
      editButton = <EditButton handleEditButtonClick={this.handleEditButtonClick} />
    }

    return (
      <div>
        <h1>{this.state.tripData.title}</h1>
        <h4>{`Start Date: ${this.state.tripData.startDate} End Date: ${this.state.tripData.endDate}`}</h4>
        <p>{this.state.tripData.destination}</p>
        <GoogleMap
          tripId={this.state.tripData.id}
          handleSelectionClick={this.handleSelectionClick}
          querySelection={this.state.querySelection ? this.state.querySelection : "hotel"}
                   />
      
      {editButton}
      <ConfirmedFriends 
        tripId={this.state.tripData.id}
        userId={this.props.userId}
        topHotel={this.state.topHotel}
        topActivities={this.state.topActivities}
      />
      <ActivityList 
        tripId={this.state.tripData.id}
        userId={this.props.userId}
        creatorId={this.state.tripData.userId}
        getTopActivities={this.getTopActivities}
      />
      <NearbyHotels
        tripId={this.state.tripData.id}
        userId={this.props.userId}
        creatorId={this.state.tripData.userId}
        getTopHotel={this.getTopHotel}
      />
      

      </div>
    )

  }
}

export default TripSummary