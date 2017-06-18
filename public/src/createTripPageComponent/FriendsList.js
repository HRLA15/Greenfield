import React from 'react'
import ReactDOM from 'react-dom'

const FriendsList = ({friends, invite, done}) => (
  <div>
  {friends.map((friend, key) => {
    return <div>
      <h5 key={key}>
      {friend.name}
      </h5>
      <button className="btn" onClick={() => {
        invite(friend)}}>Invite</button>
      <br></br>
  </div>

  })}
  <button className="doneBtn" onClick={done}>Finished</button>
  </div>
)

export default FriendsList