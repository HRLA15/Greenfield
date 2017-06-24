import React, { Component } from 'react'
import PendingList from './PendingList'
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
    this.addToPending = this.addToPending.bind(this)
  }

  componentDidMount(){
    this.initialize();
  }

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
    var queryLocation = {};
    var losAngeles = new google.maps.LatLng(34.052235, -118.243683);
    // console.log("what is pyrmont", losAngeles);
    // console.log("searchedLocation in initilize locations:", this.state.searchedLocation);
    // console.log("type of this.state.searchedLocation", typeof this.state.searchedLocation);
    
    if (typeof this.state.searchedLocation.lat === "function"){
      queryLocation = this.state.searchedLocation;
    }else{
      queryLocation = losAngeles;
    }
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


  // handleFormSubmit(){
  //   this.initAutocomplete();
  // }

  // initAutocomplete() {
  //   // Create the autocomplete object, restricting the search to geographical
  //   // location types.
  //   var placeSearch, autocomplete;
  //   var componentForm = {
  //     street_number: 'short_name',
  //     route: 'long_name',
  //     locality: 'long_name',
  //     administrative_area_level_1: 'short_name',
  //     country: 'long_name',
  //     postal_code: 'short_name'
  //   };
  //   autocomplete = new google.maps.places.Autocomplete(
  //       /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
  //       {types: ['geocode']});
  //   // console.log("document.getElementById in initAutocomplet", document.getElementById('autocomplete').value);
  //   // console.log("autocomplete return object in initAutocomplete", autocomplete.getPlace())
  //   // When the user selects an address from the dropdown, populate the address
  //   // fields in the form.
  //   autocomplete.addListener('place_changed', ()=>{
  //     console.log("is it in autocomplete?",autocomplete.getPlace().geometry.location);
  //     this.setState({
  //       searchedLocation : autocomplete.getPlace().geometry.location
  //     })
  //     this.initialize();
  //   });
    
  // }

  handleSelectionClick(selection){
    this.setState({
      querySelection : selection
    })
    this.initialize();
  }

  addToPending(){
    var tempArray = this.state.pendingList;
    tempArray.push(this.state.markerClicked);

    this.setState({
      pendingList:tempArray
      
    })
    // console.log('this is the pendingList after click', this.state.pendingList)
  }

  render(){
    return(
      <div>
        <div id="map2" style={{width:700+"px", height:500+"px"}}></div>
        <div>
          Search for :
          <button name="Hotels" value="hotel" onClick={() => {this.handleSelectionClick("hotel")}}>Hotels</button>
          <button name="Restaurants" value="restaurant" onClick={() => {this.handleSelectionClick("restaurant")}}>Restaurants</button>
          <button name="Store" value="store" onClick={() =>{this.handleSelectionClick("store")}}>Stores</button> 

        </div>
        <div>
            {this.state.markerClicked.name}
            <br></br>
            {this.state.markerClicked.address}
            <br></br>
            <img src={this.state.markerClicked.photo}></img>
            <br></br>
            {this.state.markerClicked.showAddButton ? <button onClick={this.addToPending}>Add to PendingList</button> : null}
            
        </div>
        Pending List
        {console.log("before pending list", this.state.pendingList)}
        {/*<PendingListEntry pendingList={this.state.pendingList}/>*/}

      </div>
    )
  }
}
export default GoogleMap