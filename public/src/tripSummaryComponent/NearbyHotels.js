import React, { Component } from 'react'
import NearbyHotelsEntry from './NearbyHotelsEntry'
import axiosRoutes from './TripSummaryAxiosRoutes'

const dummyData = [
  {
    hotelName: 'Hilton',
    website: 'http://www3.hilton.com/en/index.html',
    location: 'China'
  },
  {
    hotelName: 'Marriott',
    website: 'http://www.marriott.com/default.mi',
    location: 'China'
  },
  {
    hotelName: 'Trump Hotel',
    website: 'https://www.trumphotels.com/',
    location: 'China'
  }
]

class NearbyHotels extends Component {
  
  constructor(props) {
    super(props)

    this.handleVoteClick = this.handleVoteClick.bind(this)
  }

  componentWillMount() {
    //make axios call to get all the hotels for a give trip id or
    // use google place call to get all hotels near the location
    //set state using the data
    axiosRoutes.getTripNearbyHotels(this.props.tripId)
      .then((res) => {
        this.setState({
          hotels: res.data
        })
      })
      .catch(err => console.log(err))
    
  }

  componentDidMount() {
    setInterval(() => {
      axiosRoutes.getTripNearbyHotels(this.props.tripId)
        .then((res) => {
          this.setState({
            hotels: res.data
          })
          let topHotel = res.data.shift()
          this.props.getTopHotel(topHotel)
        })
        .catch(err => console.log(err))
    }
    , 1000)
  }
  handleVoteClick(hotelId) {
    console.log('you voted')
    axiosRoutes.addVoteToHotel(hotelId, this.props.userId, this.props.creatorId)
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
            <td>Hotels:</td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.hotels.map((hotel) => (
              <NearbyHotelsEntry 
                hotelObj={hotel} 
                handleVoteClick={this.handleVoteClick}
              />
            ))
          }
        </tbody>
      </table>
    </div>
    )
  }
}

export default NearbyHotels