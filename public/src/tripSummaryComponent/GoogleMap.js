import React, { Component } from 'react'
import PendingList from './PendingList'
import {Grid, Row, Col, Image, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap'
import axiosRoutes from './TripSummaryAxiosRoutes'
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton';

class GoogleMap extends Component{
  constructor(props){
    super(props)
    this.state = {
      googlePlaceResults: [],
      markerClicked :{},
      searchedLocation : {},
      querySelection :"hotel",
      pendingList:[],
    }
    this.initialize = this.initialize.bind(this);
    this.createMarker = this.createMarker.bind(this);
    this.handleMarkerClicked = this.handleMarkerClicked.bind(this);
    // this.initAutocomplete = this.initAutocomplete.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSelectionClick = this.handleSelectionClick.bind(this);
    // this.addToPending = this.addToPending.bind(this)
    this.handleAddToConfirmList=this.handleAddToConfirmList.bind(this)
  }

  componentDidMount(){
    console.log('these are the props ', this.props)
    axiosRoutes.getTripData(this.props.tripId)
      .then(({ data }) => {
        this.setState({ searchedLocation: data[0] }, () => {
          this.initialize();
        })
      })
  }
  // componentWillReceiveProps(){
  //   console.log('these are the props ', this.prop)
  //   this.initialize();
  // }
  // componentWillMount() {
  // }

  handleMarkerClicked(place){
    this.setState({
        markerClicked:place
      })
  }

  createMarker(place, map) {
    // console.log("place in createMarker", place)
    var currentContext = this;
    var placeLoc = place.geometry.location;
    var photos = place.photos;
    if (!photos) {
      return;
    }
    var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      map: map,
      position: place.geometry.location
    });
    var infoWindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent("<div>"+place.name+"<br></br>"+place.formatted_address+"</div>");
      infoWindow.open(map, this);
      currentContext.setState({
        markerClicked:{
          name:place.name,
          address:place.formatted_address,
          photo:photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300}),
          showAddButton:true
        }
      })
    });
  }

  initialize() {
    // const {tripLat, tripLng} = this.props;
    console.log('these are the prroppposss in intitialize ', this.props)
    var queryLocation = new google.maps.LatLng(this.state.searchedLocation.latitude, this.state.searchedLocation.longitude);
    // console.log("what is pyrmont", losAngeles);
    // console.log("searchedLocation in initilize locations:", this.state.searchedLocation);
    // console.log("type of this.state.searchedLocation", typeof this.state.searchedLocation);
    var losAngeles = new google.maps.LatLng(46.471979, -90.247285);

    // if (typeof this.state.searchedLocation.lat === "function"){
    //   queryLocation = queryLocation
    // }else{
    //   queryLocation = losAngeles;
    // }

    var map = new google.maps.Map(document.getElementById('map2'), {
      center: queryLocation,
      zoom: 15
    });
    // console.log("what is this.state.querySelection",this.state.querySelection);

    var request = {
      location: queryLocation,
      radius: '500',
      query: '' + this.state.querySelection
      // types: ['hotel']
    };

    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, (result, status) => {
      // console.log("service in callback is: ", service)
      // console.log("nearyby search status: ",status)
      if(status == google.maps.places.PlacesServiceStatus.OK){
        // console.log("result of nearbySearch", result)
        this.setState({
          googlePlaceResults: result
        })
        for(var i = 0; i < result.length; i ++){
          var place = result[i];
          this.createMarker(place, map) 
        }
      }
    });  
  }

  handleSelectionClick(selection){
    this.setState({
      querySelection : selection
    })
    this.initialize();
  }

  // addToPending(){
  //   var tempArray = this.state.pendingList;
  //   tempArray.push(this.state.markerClicked);

  //   this.setState({
  //     pendingList:tempArray
  //   })
  //   // console.log('this is the pendingList after click', this.state.pendingList)
  // }


  handleAddToConfirmList(type, markerClicked){
    if(type =="hotel"){
      //post request to
      console.log(markerClicked)
      axiosRoutes.postTripHotel(this.props.tripId, markerClicked)
        .then((res) => {
          console.log(res)
          this.props.toggleHandler()
        })
        .catch(err => console.log(err))
    }else{
      axiosRoutes.postTripActivity(this.props.tripId, markerClicked)
        .then((res) => {
          console.log(res)
          this.props.toggleHandler()
        })
        .catch(err => console.log(err))
    }

  }




  render(){
    // this.initialize();
    // var obj = {lat: this.props.tripLat, lng: this.props.tripLng}
    // this.setState({ searchedLocation: Object.assign(this.state.searchedLocation, obj )})
    return(
      <div>

        <div>
          <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
            <div id="map2" style={{borderRadius: 10 + "px", marginLeft: 20 + 'px', width: 60 + "%", height:500+"px"}}></div>
              <div style ={{marginLeft: 20 + 'px'}}>
                  <Image style={{marginLeft: 20 + 'px'}}  width={300} height={300} src={this.state.markerClicked.photo} rounded></Image>
                  <br></br>
                  <div style={{marginLeft: 20 + "px"}}>
                  {this.state.markerClicked.name}
                  <br></br>
                  {this.state.markerClicked.address}
                  <br></br>
                  </div>
                  {this.state.markerClicked.showAddButton ? 
                    <RaisedButton style={{marginLeft: 20 + "px"}} label="Add to Suggestions" onClick={()=>{this.handleAddToConfirmList(this.state.querySelection, this.state.markerClicked)}}/>
                    : null
                  }

            <div style={{marginTop: 10 + "px", marginLeft: 20 + "px", display: 'flex', flexDirection: 'column'}}>

            <RaisedButton style={{marginBottom: 3 + "px"}} primary={true} label="Hotels" onClick={() => {this.handleSelectionClick("hotel")}}/>
            <RaisedButton style={{marginBottom: 3 + "px"}} primary={true} label="Restaurants" onClick={() => {this.handleSelectionClick("restaurant")}}/>
            <RaisedButton style={{marginBottom: 3 + "px"}} primary={true} label="Store" onClick={() =>{this.handleSelectionClick("store")}}/>
            </div>

            </div>
            </div> 


        </div>
        
        <div>
        {this.state.pendingList.length > 0 ? 
          <PendingList queryType={this.state.querySelection} 
                      pendingList={this.state.pendingList}
          /> 
          : null
        }
        </div>
      </div>
    )
  }
}
export default GoogleMap