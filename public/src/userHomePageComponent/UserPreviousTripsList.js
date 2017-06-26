import React, { Component } from 'react'
import UserPreviousTripEntry from './UserPreviousTripEntry'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import Input from 'material-ui/svg-icons/action/exit-to-app'
import {GridList, GridTile} from 'material-ui/GridList';
import Avatar from 'material-ui/Avatar';
import axiosRoutes from './UserHomeAxiosRoutes'

const dummyTripData = [
  {
    profileImg: "https://i.ytimg.com/vi/2SzkZm7JP58/hqdefault.jpg",
    img: "https://68.media.tumblr.com/124bf5e49c1a435ca69a2b1dbbd81fb2/tumblr_my36u1EXtI1rnuaico1_500.gif",
    title: "California Love",
    destination: "California",
    description: "Cali Drow",
    startDate: "10/30/15",
    endDate: "11/11/15"
  },
  {
    profileImg: "http://omgface.com/z/hard_work_1454965684.jpg",
    img: "http://www.telegraph.co.uk/content/dam/Travel/leadAssets/28/00/wall4_2800060a-large.jpg",
    title: "The Great Wall",
    destination: "China",
    description: "NiHou",
    startDate: "11/09/17",
    endDate: "11/11/18"
  }
]

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-around',
    opacity: 0.7
  },
  gridList: {
    width: 100 + "%",
    height: 100 + "%",
    overflowY: 'auto',
  },
};


class UserPreviousTripsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      previousTrips: []
    }

    this.handleEntryClick = this.handleEntryClick.bind(this)
  }

  componentWillMount() {
    axiosRoutes.getUserPreviousTrips(this.props.userId)
      .then((res) => {
        if(Array.isArray(res.data)) {
          this.setState({
            previousTrips: res.data
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  componentWillReceiveProps(nextProps) {
    axiosRoutes.getUserPreviousTrips(nextProps.userId)
      .then((res) => {
        if(Array.isArray(res.data)) {
          this.setState({
            previousTrips: res.data
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleEntryClick(previousTrip) {
    //add redirect to the upcoming trip info page
    this.props.redirect(`event/${upcomingTripId}`)
  }

  render() {
    return (
     
    <div style={styles.root}>
    <GridList
      cols={1}
      cellHeight={100}
      style={styles.gridList}
    >
      <Subheader style={{fontSize: 30 + "px", textAlign: "left"}}>Previous Trips</Subheader>
      {dummyTripData.map((tile) => (
        <GridTile
          style={{borderRadius: 5 + 'px'}}
          key={tile.img}
          title={tile.title}
          subtitle={tile.startDate}
          actionIcon={
            <div>
            <Avatar
          src={tile.profileImg}
          size={50}
          style={{marginRight: 20 + "px"}}
          />
          {/*<IconButton style ={{marginTop: 5 + "%"}} onClick={()=>{console.log("clicked nigga")}}><Input color="white" /></IconButton>*/}
          </div>
          }
          cols={tile.fearued ? 1:1}
          >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
     
      /*<table>
        <thead>
          <tr>
            <th>
              Previous Trips
            </th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.previousTrips.map((previousTrip) => (
              <UserPreviousTripEntry previousTrip={previousTrip} handleEntryClick={this.handleEntryClick}/>
            ))
          }
        </tbody>
      </table>*/
    )
  }
}

export default UserPreviousTripsList