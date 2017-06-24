import React, { Component } from 'react'


class GMapQuerySelect extends Component{
  constructor(props){
    super(props)
    this.state = {
      value : '',
    }

    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   console.log('You chose to search for: ' + event.target.value);
  //   this.setState({
      
  //   })
  //   event.preventDefault();
  // }

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