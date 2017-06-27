import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FriendsList from './FriendsList'
import { Link } from 'react-router-dom';
import axios from 'axios'
import axiosRoutes from './CreateTripPageAxiosRoutes'
import {Redirect} from 'react-router-dom'
import {Button, Icon, Row, Input} from 'react-materialize'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';
import Dropzone from 'react-dropzone'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Create extends Component {
  constructor(){
    super();
    this.state = {

      fromDate: '',
      toDate: '',
      showInvite: true,
      //Invited Friends storage
      friends: [],
      display: false,
      // displayEventPage: false,

      //Trip info
      tripName: '',
      location: '',
      description: '',

      friendsData: '',
      longitude: '',
      latitude: '',
      accepted: [],
      url: '',

      holderTripName: 'Trip Name',
      holderDestination: 'Destination',
      holderDescription: 'Description',
      holderImg: 'ImageURL',
      holderStartDate: '',
      holderEndDate: ''

    }
    
    //binds
    this.inviteFriends = this.inviteFriends.bind(this)
    this.uninviteFriend = this.uninviteFriend.bind(this)
    this.invite = this.invite.bind(this)
    this.done = this.done.bind(this)
    this.eventFromDate = this.eventFromDate.bind(this)
    this.eventToDate = this.eventToDate.bind(this)
    this.finalize = this.finalize.bind(this)
    this.tripNameData = this.tripNameData.bind(this)
    this.locationNameData = this.locationNameData.bind(this)
    this.descriptionData = this.descriptionData.bind(this)
    this.initAutocomplete = this.initAutocomplete.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.urlData = this.urlData.bind(this)
  }

componentWillMount() {

  const urlArr = this.props.location.pathname.split('/')

  if(urlArr[1] == "edit") {
    const tripId = parseInt(urlArr[2])

    axiosRoutes.getTripData(tripId)
      .then((res) => {
        let url = 'ImageURL'
        if(res.data[0].url !== '') {
          url = res.data[0].url
        } 
        this.setState ({
          holderTripName: res.data[0].title,
          holderDestination: res.data[0].destination,
          holderDescription: res.data[0].description,
          holderStartDate: res.data[0].startDate,
          holderEndDate: res.data[0].endDate,
          longitude: res.data[0].longitude,
          latitude: res.data[0].latitude,
          holderImg: url
        })
      })
      .catch((err) => console.log(err))
  }

}

componentDidMount() {
  // axiosRoutes.getUserFriends(localStorage.userId, tripId)
  //   .then((res)=>{
  //     this.setState({friendsData: res.data[0].friend})
  //     console.log("FRRRRIIIIIIENDSSSS", res.data[0])
  //   })
  //   .catch((err) =>{
  //     console.log(err)
  //   })
}

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  
//auth0 login
  login() {
    this.props.auth.login();
  }

//Invite Frinends Button
  inviteFriends(){
    this.setState({display: true})
  }

//Uninvite Friends button
  uninviteFriend(friend){
    for(var i = 0; i < this.state.friends.length; i++) {
      if(friend === this.state.friends[i]) {
        this.state.friends.splice(i, 1)
        this.setState({friends: this.state.friends})
      }
    }
    console.log(friend + ' was uninvited')
  }

//Invite friends list invite button
  invite(friend){
    for (var i = 0; i < this.state.friends.length; i++) {
      if (friend.name === this.state.friends[i].name) {
        return alert('Friend already invited')
      }
    }
    this.state.friends.push(friend)
    this.setState({
      friends: this.state.friends
    })
  }

//When finished inviting friends Button
  done(){
    this.setState({display: false})
    console.log(this.state.friends)
  }

 onDrop(accepted) {
    this.setState({
      accepted: accepted
    })
  }

//grab all trip data and put it into an object to pass into database
// title, destination, startDate, endDate
  finalize() {
    const tripInfo = {
      title: this.state.tripName,
      destination: this.state.location,
      description: this.state.description,
      startDate: this.state.fromDate,
      endDate: this.state.toDate,
      longitude: this.state.longitude,
      latitude: this.state.latitude,
      url: this.state.url
    }

    //post request to database
    axiosRoutes.postTripInfo(tripInfo)
      .then((res) => {
        axiosRoutes.postUserTrip(this.props.userId, res.data.id)
          .then((res) => {
            console.log(tripInfo)
            this.state.friends.forEach((friend) => {
              axiosRoutes.addFriendToTrip(this.props.userId, res.data.tripId, friend.id)
                .then((res) => {
                  console.log(res)
                })
                .catch(err => console.log(err))
            })
            this.goTo.call(this, `event/${res.data.tripId}`)
          })
          .catch(err => console.log(err))
      })
      .catch((err)=> {
        console.log(err)
      })

  }

//Event listeners to populate fields onchange
  tripNameData(events) {
    this.setState({tripName: events.target.value})
    console.log('Trip Name: ',events.target.value)
    console.log(this.state.description)
  };
  locationNameData(events) {
    this.setState({location: events.target.value})
    console.log('Location: ',events.target.value)
  };
  descriptionData(events) {
    this.setState({description: events.target.value})
    console.log('Description: ',events.target.value)
  };
  eventFromDate(events) {
    this.setState({fromDate: events.target.value})
    console.log(this.state.fromDate)
  };
  eventToDate(events) {
    this.setState({toDate: events.target.value})
    console.log(this.state.toDate)
  };
  urlData(events) {
    this.setState({url: events.target.value})
  }

//AutoComplete
handleFormSubmit(){
    this.initAutocomplete();
  }
 initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    var placeSearch, autocomplete;
    var componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});
    // console.log(“document.getElementById in initAutocomplet”, document.getElementById(‘autocomplete’).value);
    // console.log(“autocomplete return object in initAutocomplete”, autocomplete.getPlace())
    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', ()=>{
      //set address, longitude and latitude
      this.setState({
        searchedLocation : autocomplete.getPlace().geometry.location,
        location: autocomplete.getPlace().formatted_address,
        longitude: autocomplete.getPlace().geometry.location.lng(),
        latitude: autocomplete.getPlace().geometry.location.lat()
      })
    });
    
 }

  render() {
    let pic = null
    let previewPic = null

    if(this.state.accepted.length > 0) {
      previewPic = this.state.accepted[0].preview
    }

  //Invite Friends List on "Invite Friends" click
    if (this.state.display === true) {
      return (
      <div>
        <h1>Friends List</h1>
        <FriendsList 
        friendsData = {this.state.friendsData}
        friends = {this.state.friendsData} 
        invite = {this.invite}
        done = {this.done}
        hideInvite = {this.hideInvite}
        />
      </div>
      )
  }

const { isAuthenticated } = this.props.auth;
        if (!isAuthenticated()) {
          return (
          <Redirect to ={{
            pathname: '/'
          }} />
          )
        }

    return (
      <div> 
        {/*drag and drop dropzone*/}
        <Dropzone
          accept="image/jpeg, image/png"
          onDrop={this.onDrop.bind(this)}
          style={{border: "solid 3px white", backgroundColor: "white", height: 200 + "px", width: 100+ "%"}}
        >
          <img src={previewPic} style ={{marginTop: -40 + "px", backgroundSize: "cover", backgroundColor: "#f2f2f2", borderRadius: 5, width: 100 + "%"}} height="260"/>
        </Dropzone>

          <div className="input field" style={{marginLeft: 30 + "px", marginTop: 30 + "px", marginRight: 30 + "px"}}>
            <Row>
                <Input defaultValue={this.state.tripName} style={{height: 70 + "px", fontSize: 30 + "px"}} placeholder={this.state.holderTripName} s={12} onChange={this.tripNameData}/>
                <Input defaultValue={this.state.location} id="autocomplete" type="text" style={{height: 40 + "px", fontSize: 20 + "px"}} placeholder={this.state.holderDestination} s={12} onChange={this.handleFormSubmit}/>
                <Input defaultValue={this.state.description} style={{fontSize: 15 + "px"}}placeholder={this.state.holderDescription} s={12} onChange={this.descriptionData}/>
                <Input defaultValue={this.state.url} style={{fontSize: 15 + "px"}}placeholder={this.state.holderImg} s={12} onChange={this.urlData}/>
            </Row>
          </div>

          <div id="friendsList" style={{position: "absolute", marginTop: 20 + "px", marginLeft: 60 + "%"}}>
            <h4>Invited Friends</h4>
            <Friends friends={this.state.friends} uninviteFriend={this.uninviteFriend} />
          </div>

          <div id="bottomHalf" style={{marginLeft: 30 + "px", marginRight: 50 + "%"}}>

            <span style={{marginLeft: 2 + "%"}}>From:</span>

            <input defaultValue={this.state.fromDate} style={{marginLeft: 2 + "%", height: 50 + "px", fontSize: 15 + "px"}} type="date" onChange={this.eventFromDate}/>
            <span style={{marginLeft: 2 + "%"}}> To:</span>
            <input defaultValue={this.state.toDate} style={{marginLeft: 2 + "%",height: 50 + "px", fontSize: 15 + "px"}} type="date" onChange={this.eventToDate}/>
            <br></br>
            <div id="invitedFriends">
            </div> 

            

            <FlatButton label="Invite Friends" primary={true} onClick={this.inviteFriends}/>
            <br></br>
            

            
            <FlatButton label="Finalize Trip" primary={true} onClick = {this.finalize}/>
            
          </div>




      </div>
    ) 

  } //end render bracket
} //end Create component bracket

//Render invited friends onto Create Page
const Friends = ({friends, uninviteFriend}) => (
  <div>
  {friends.map((friend, key) => (
    <div>
    <Chip
      style={styles.chip}
        >
        <Avatar src="http://orig12.deviantart.net/e40f/f/2012/239/a/d/aang_facebook_default_profile_picture_by_redjanuary-d5cm82l.png" />
        {friend.name}
    <FlatButton label="Uninvite" primary={true} onClick={() => {uninviteFriend(friend)}} />
        </Chip>
    </div>
  ))
  }
  </div>
)

export default Create