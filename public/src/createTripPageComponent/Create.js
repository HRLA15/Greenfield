import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FriendsList from './FriendsList'

class Create extends Component {
  constructor(){
    super()
    this.state = {

      friends: [],

      display: false,

      dummyData: [{
        name: "Jose"
      },{
        name: "Han Solo"
      },{
        name: "Jay is cool"
      }]
    }
    
    this.inviteFriends = this.inviteFriends.bind(this)
    this.invite = this.invite.bind(this)
    this.done = this.done.bind(this)
  }

//Invite Frinends Button
  inviteFriends(){
    this.setState({display: true})
    console.log('clicked')
  }

//Invite friends list invite button
  invite(friend){
    console.log('Clicked on friend')
    console.log(friend)
    this.state.friends.push(friend.name)
    this.setState({
      friends: this.state.friends
    })
  }

//When finished inviting friends Button
  done(){
    this.setState({display: false})
    console.log(this.state.friends)
  }

  render() {

//Invite Friends List on "Invite Friends" click
    if (this.state.display === true) {
      return (
      <div>
        <h1>Friends List</h1>
        <FriendsList 
        friends = {this.state.dummyData} 
        invite = {this.invite}
        done = {this.done}
        />
      </div>
      )
  }


    return (
        <div>
          <div id="topHalf">
            <h2>Create Trip</h2>
            <input id="tripName" type = 'text' placeholder = "Trip name"></input>
          <br></br>
            <textarea name="description" placeholder ="Description Details"></textarea>
          </div>

          <div id="bottomHalf">
            <span>From:</span>
            <input type="date" />
            <span>To:</span>
            <input type="date" />
            <br></br>
            <button className="btn" onClick={this.inviteFriends}>Invite Friends</button>
            <br></br>
            <button className="finishedMakingTrip">Finalize Trip</button>
          </div>
          {/*Render Invited Friends*/}
          <div id="invitedFriends">
            <Friends friends={this.state.friends} />
          </div>

        </div>
    )
  }
}

const Friends = ({friends}) => (
  <div>
  {friends.map(friend => {
    return <li>{friend}</li>
  })
  }
  </div>
)

export default Create