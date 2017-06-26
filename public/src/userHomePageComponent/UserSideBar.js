import React, { Component } from 'react'
import CreateTripButton from './CreateTripButton'
import axiosRoutes from './UserHomeAxiosRoutes'
import { Redirect, Link } from 'react-router-dom'
import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';


class UserSideBar extends Component {

  constructor() {
    super()


  }


  render() {

    return (
      <div>
        <Avatar style={{marginTop: 50 + "px", marginLeft: 20 + "px"}}
          src="http://www.provo2.com/health-fitness/wp-content/uploads/2010/11/default-avatar.jpg"
          size={100}
        />
          <List style={{marginTop: 25 + "px"}}>
            <Link to ='/create'>
            <ListItem primaryText="Create" leftIcon={<ContentSend />} />
            </Link>
            <ListItem primaryText="Friends" leftIcon={<ActionGrade />} />
            <ListItem primaryText="My Trips" leftIcon={<ContentInbox />} />
          </List>
          <Divider />
          <List>
            <ListItem primaryText="Invites" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Jay is hot" rightIcon={<ActionInfo />} />
          </List>
      </div>
    )
  }

}

export default UserSideBar