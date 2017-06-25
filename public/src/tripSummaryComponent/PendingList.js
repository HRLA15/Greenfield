import React, { Component } from 'react'
import PendingListEntry from './PendingListEntry'
import ConfirmedHotelList from './ConfirmedHotelList'
import ConfirmedRestaurantList from './ConfirmedRestaurantList'
import ConfirmedFunList from './ConfirmedFunList'
class PendingList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      curPendingList:this.props.pendingList,
      showConfirmedHotels:false,
      showConfirmedRestaurants:false,
      showConfirmedFuns:false,
      confirmedHotelList:[],
      confirmedRestaurantList:[],
      confirmedFunList:[]
    }

    this.handleListEntryClick = this.handleListEntryClick.bind(this);
    this.handleAddToConfirmList=this.handleAddToConfirmList.bind(this)
  }


  handleListEntryClick(type){
    console.log("add this to type:", type)
  }

  handleAddToConfirmList(type, event){
    console.log("should add to type:", type);
    console.log("the event that got pick is ", event)

    if(type =="hotel"){
      var tempHotelList = this.state.confirmedHotelList
      tempHotelList.push(event)
      this.setState({
        showConfirmedHotels:true,
        confirmedHotelList:tempHotelList
      })
    }else if(type =="restaurant"){
      var tempRestaurantList = this.state.confirmedRestaurantList
      tempRestaurantList.push(event)
      this.setState({
        showConfirmedRestaurants:true,
        confirmedRestaurantList:tempRestaurantList
      })
    }else{
      var tempFunList = this.state.confirmedFunList
      tempFunList.push(event)
      this.setState({
        showConfirmedFuns:true,
        confirmedFunList:tempFunList
      })
    }


  }

  render(){
    // console.log("pendinglist in pendinglist entry",this.props.queryType);
    console.log("confirmed hotels:", this.state.confirmedHotelList)
    return(
       <div>
        <table>
          <thead>
            <tr>
              <td>Pending List:</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.pendingList.map((pendingListEntry) => (
                <PendingListEntry queryType={this.props.queryType}
                                  handleListEntryClick={this.handleListEntryClick} 
                                  pendingListEntry={pendingListEntry} 
                                  handleAddToConfirmList={this.handleAddToConfirmList}/>
              ))
            }
          </tbody>
        </table>


        <table>
          <thead>
            <tr>
              <td>{this.state.showConfirmedHotels? "Confirmed Hotel List:" : null}</td>
            </tr>
          </thead>

          <tbody>
            {this.state.showConfirmedHotels?
                <ConfirmedHotelList confirmedHotelList={this.state.confirmedHotelList}/>
            :null
            }
          </tbody>
        </table>



        <table>
          <thead>
            <tr>
              <td>{this.state.showConfirmedRestaurants? "Confirmed Restaurant List:" : null}</td>
            </tr>
          </thead>
          <tbody>
            {this.state.showConfirmedRestaurants?
              <ConfirmedRestaurantList confirmedRestaurantList={this.state.confirmedRestaurantList}/>
            :null
            }
          </tbody>
        </table>
        <table>  
          <thead>
            <tr>
              <td>{this.state.showConfirmedFuns? "Confirmed Fun List:" : null}</td>
            </tr>
          </thead>
          <tbody>
            {this.state.showConfirmedFuns?
              <ConfirmedFunList confirmedFunList={this.state.confirmedFunList}/>
            :null
            }
          </tbody>
        </table>
      </div>
    )
  }

}

export default PendingList