import React from 'react'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

//This file is meant to render friends list onto create page

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const FriendsList = ({friendsData, friends, invite, done, hideInvite}) => (
  
  <div>
  {friendsData.map((friend, key) => {
    return <div>
      <span key={key}>
      <Chip
          style={styles.chip}
        >
          <Avatar src="http://orig12.deviantart.net/e40f/f/2012/239/a/d/aang_facebook_default_profile_picture_by_redjanuary-d5cm82l.png" />
          {friend.name}
      <FlatButton label="Invite" primary={true} onClick={() => {
        invite(friend)}}/>
        </Chip>
      
      </span>

  </div>

  })}
  <FlatButton label="Finished" primary={true} onClick={done}/>
  </div>
)

export default FriendsList