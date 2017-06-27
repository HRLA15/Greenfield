import React, { Component } from 'react'
import {Grid, Row, Col, Image, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap'
import axiosRoutes from './TripSummaryAxiosRoutes'
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton';

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