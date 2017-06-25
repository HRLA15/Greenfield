import React, { Component } from 'react'
import UserUpcomingTripEntry from './UserUpcomingTripEntry'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import Input from 'material-ui/svg-icons/action/exit-to-app'
import {GridList, GridTile} from 'material-ui/GridList';
import Avatar from 'material-ui/Avatar';


const dummyTripData = [
  {
    id: 1,
    profileImg: "https://a1-images.myspacecdn.com/images03/3/8aeccb762a84407ebac956949fb30659/300x300.jpg",
    img: "http://cdn1.buuteeq.com/upload/18138/llama-at-the-machu-picchu-unesco-peru-andbeyond.jpg",
    title: "Let's go to Peru!!",
    destination: "Peru",
    description: "Cha Cha",
    startDate: "10/09/17",
    endDate: "10/11/17"
  },
  { 
    id: 2,
    profileImg: "http://bbsimg.ngfiles.com/1/20732000/ngbbs4b6e2d81cb802.jpg",
    img: "https://static1.squarespace.com/static/54d29f9ee4b00906e82cc34a/t/5887e319e3df28abe39d7da7/1485300510967/shutterstock_225726403+%281%29.jpg?format=2500w",
    title: "Next Stop Mexico",
    destination: "Mexico",
    description: "Buenos Dias",
    startDate: "11/16/17",
    endDate: "11/20/17"
  },
  {
    id: 3,
    profileImg: "https://i.ytimg.com/vi/2SzkZm7JP58/hqdefault.jpg",
    img: "https://68.media.tumblr.com/124bf5e49c1a435ca69a2b1dbbd81fb2/tumblr_my36u1EXtI1rnuaico1_500.gif",
    title: "California Love",
    destination: "California",
    description: "Cali Drow",
    startDate: "10/30/15",
    endDate: "11/11/15"
  },
  {
    id: 4,
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
  },
  gridList: {
    // marginTop: 20 + "px",
    width: 100 + "%",
    height: 100 + "%",
    overflowY: 'auto',
  },
};

class UserUpcomingTripsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      upcomingTrips: dummyTripData
    }

    this.handleEntryClick = this.handleEntryClick.bind(this)
  }

  // componentWillMount() {
  //   axios.get()
  //     .then((res) => {
  //       this.setState({
  //         upcomingTrips: res.body
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  handleEntryClick(upcomingTripId) {
    //add redirect to the upcoming trip info page
    this.props.redirect(`event/${upcomingTripId}`)

  }

  render() {
    return (

    <div style={styles.root}>
    <GridList
      cols={1}
      cellHeight={175}
      style={styles.gridList}
    >
      <Subheader style={{fontSize: 30 + "px", textAlign: "left"}}>Upcoming Trips</Subheader>
      {dummyTripData.map((tile) => (
        <GridTile
          onClick={()=> this.handleEntryClick(tile.id)}
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
              Upcoming Trips
            </th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.upcomingTrips.map((upcomingTrip) => (
              <UserUpcomingTripEntry upcomingTrip={upcomingTrip} handleEntryClick={this.handleEntryClick}/>
            ))
          }
        </tbody>
      </table>*/
    )
  }
}

export default UserUpcomingTripsList