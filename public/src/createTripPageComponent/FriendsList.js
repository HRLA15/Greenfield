import React from 'react'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/FlatButton'

const FriendsList = ({friendsData, friends, invite, done, hideInvite}) => (
  
  <div>
  {friendsData.map((friend, key) => {
    return <div>
      <span key={key}>
      {friend.id}
      </span>

      <FlatButton label="Invite" primary={true} onClick={() => {
        invite(friend)}}/>

  </div>

  })}
  <FlatButton label="Finished" primary={true} onClick={done}/>
  </div>
)

export default FriendsList