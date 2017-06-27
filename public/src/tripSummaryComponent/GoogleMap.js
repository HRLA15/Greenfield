import React, { Component } from 'react'
import PendingList from './PendingList'
import {Grid, Row, Col, Image, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap'
import axiosRoutes from './TripSummaryAxiosRoutes'

//the google map is rendered 
//Note: map must be initizlized in componentDidMount to avoid async issue
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
    this.handleSelectionClick = this.handleSelectionClick.bind(this);
    this.handleAddToConfirmList=this.handleAddToConfirmList.bind(this)
  }


  
  componentDidMount(){
    console.log('these are the props ', this.props)
    axiosRoutes.getTripData(this.props.tripId)
      .then(({ data }) => {
        this.setState({ searchedLocation: data[0] }, () => {
          //searchedLocation is in tripsummary.js passed in there
          this.initialize();
        })
      })
  }

  //here you can get the marker that is clicked and their information 
  handleMarkerClicked(place){
    this.setState({
        markerClicked:place
      })
  }

  //add markers in the google place 
  createMarker(place, map) {
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
   
    var queryLocation = new google.maps.LatLng(this.state.searchedLocation.latitude, this.state.searchedLocation.longitude);
    var losAngeles = new google.maps.LatLng(46.471979, -90.247285);
    var map = new google.maps.Map(document.getElementById('map2'), {
      center: queryLocation,
      zoom: 15
    });
    
    var request = {
      location: queryLocation,
      radius: '500',
      query: '' + this.state.querySelection
      // types: ['hotel']
    };

    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, (result, status) => {
      if(status == google.maps.places.PlacesServiceStatus.OK){
       
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


  //this add the the markerClicked items to the confirmed list
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


  //render the google map at map2, preview on the right of the map, and the search bar
  
  render(){
    return(
      <div>
            <Col xs={12} id="map2" style={{width:500+"px", height:500+"px"}}></Col>
            <Col xs={12}>
            <h1>Preview</h1>
                  <Image  width={400} height={400} src={this.state.markerClicked.photo} rounded></Image>
                  <br></br>
                  {this.state.markerClicked.name}
                  <br></br>
                  {this.state.markerClicked.address}
                  <br></br>
                  {this.state.markerClicked.showAddButton ? 
                    <Button bsStyle="primary" onClick={()=>{this.handleAddToConfirmList(this.state.querySelection, this.state.markerClicked)}}>Add to Suggestions</Button> 
                    : null
                  }
            </Col>

            <Col xs={12}>
            
            <h1>Search for :</h1>
            <Button bsStyle="info" name="Hotels" value="hotel" onClick={() => {this.handleSelectionClick("hotel")}}>Hotels</Button>
            <Button bsStyle="info" name="Restaurants" value="restaurant" onClick={() => {this.handleSelectionClick("restaurant")}}>Restaurants</Button>
            <Button bsStyle="info" name="Store" value="store" onClick={() =>{this.handleSelectionClick("store")}}>Stores</Button> 
            </Col>
        
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