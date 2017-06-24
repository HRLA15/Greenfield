import React from 'react'
import ReactDOM from 'react-dom'

const FriendsList = ({friends, invite, done, hideInvite}) => (
  
  <div>
  {friends.map((friend, key) => {
    return <div>
      <span key={key}>
      {friend.firstName}
      </span>
      <button className="btn" onClick={() => {
        invite(friend)}}>Invite</button>

  </div>

  })}
  <button className="doneBtn" onClick={done}>Finished</button>
  </div>
)

export default FriendsList