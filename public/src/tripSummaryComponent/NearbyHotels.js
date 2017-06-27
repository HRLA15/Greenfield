import React, { Component } from 'react'
import NearbyHotelsEntry from './NearbyHotelsEntry'
import axiosRoutes from './TripSummaryAxiosRoutes'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'white',
  },
};

const dummyData = [
  {
    name: 'Hoelton',
    url: 'https://exp.cdn-hotels.com/hotels/1000000/150000/140600/140596/140596_275_z.jpg',
    address: 'China'
  },
  {
    name: 'Marriohoe',
    url: 'http://www.litorehotel.com/web/en/images/placeholders/1920x1200-0.jpg',
    address: 'China'
  },
  {
    name: 'Jay Hoetel',
    url: 'http://betterdailyhabits.com/wp-content/uploads/2015/06/hotel-generic.jpg',
    address: 'China'
  },
  {
  name: 'Hoelton',
    url: 'https://exp.cdn-hotels.com/hotels/1000000/150000/140600/140596/140596_275_z.jpg',
    address: 'China'
  },
  {
  name: 'Hoelton',
    url: 'https://exp.cdn-hotels.com/hotels/1000000/150000/140600/140596/140596_275_z.jpg',
    address: 'China'
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
  
  componentWillReceiveProps(nextProps) {

        if(nextProps.toggle !== this.state.toggle) {

          this.setState({
            toggle: nextProps.toggle
          })

          axiosRoutes.getTopFiveHotels(this.props.tripId)
            .then((res) => {
              if(Array.isArray(res.data)) {
                let topHotelArr = []

                if(res.data.length > 3) {
                  topHotelArr = res.data.slice(0,3)
                } else {
                  topHotelArr = res.data.slice(0, res.data.length)
                }
                this.props.getTopHotel(topHotelArr)
              }
            })
            .catch(err => console.log(err))

          axiosRoutes.getTripNearbyHotels(this.props.tripId)
            .then((res) => {
              if(Array.isArray(res.data[0].hotels)) {
                this.setState({
                  hotels: res.data[0].hotels
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

  // componentWillUnmount() {
  //   clearInterval(this.state.interval)
  // }

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
      <h5>Hotels</h5>
      <GridList style={styles.gridList} cols={2.2}>
      {this.state.hotels.map((tile) => (
        <GridTile
          onClick={()=>{this.handleVoteClick(tile.id)}}
          style={{borderRadius: 3 + "px", marginLeft: -3 + "px"}}
          key={tile.id}
          title={tile.name}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.url} />
        </GridTile>
      ))}
    </GridList>
    </div>
    )
  }
}

export default NearbyHotels