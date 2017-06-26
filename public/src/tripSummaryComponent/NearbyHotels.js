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
    this.state = {
      hotels: []
    }

    this.handleVoteClick = this.handleVoteClick.bind(this)
  }

  // componentWillMount() {
  //   //make axios call to get all the hotels for a give trip id or
  //   // use google place call to get all hotels near the location
  //   //set state using the data
  //   console.log('nearby hotel props', this.props)
  //   axiosRoutes.getTripNearbyHotels(this.props.tripId)
  //     .then((res) => {
  //       if(Array.isArray(res.data)) {
  //         console.log('gaygaygay')
  //         this.setState({
  //           hotels: res.data
  //         })
  //       }
  //     })
  //     .catch(err => console.log(err))
    
  // }

  componentDidMount() {
    // const interval = setInterval(() => {
      axiosRoutes.getTripNearbyHotels(this.props.tripId)
        .then((res) => {
          console.log('we in here')
          if(Array.isArray(res.data)) {
            console.log('is an arr res.data', res.data[0].hotels)
            this.setState({
              hotels: res.data[0].hotels
            })
            let topHotel = res.data.shift()
            this.props.getTopHotel(topHotel)
          }
        })
        .catch(err => console.log(err))
    // }
    // , 1000)
    // this.setState({
    //   interval: interval
    // })
  }

  componentWillUnmount() {
    // clearInterval(this.state.interval)
  }

  handleVoteClick(hotelId) {
    console.log('you voted')
    axiosRoutes.addVoteToHotel(hotelId, this.props.userId)
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