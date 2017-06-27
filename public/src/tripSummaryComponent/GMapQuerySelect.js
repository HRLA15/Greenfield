import React, { Component } from 'react'

//query hotel, restaurants and store selection
class GMapQuerySelect extends Component{
  constructor(props){
    super(props)
    this.state = {
      value : '',
    }
  }
  render(){
    return(
      <div>
        Search for :
        <button name="Hotels" value="hotel" onClick={() => {this.props.handleSelectionClick("hotel")}}>Hotels</button>
        <button name="Restaurants" value="restaurant" onClick={() => {this.props.handleSelectionClick("restaurant")}}>Restaurants</button>
        <button name="Store" value="store" onClick={() =>{this.props.handleSelectionClick("store")}}>Stores</button> 

      </div>
    )
  }
}

export default GMapQuerySelect