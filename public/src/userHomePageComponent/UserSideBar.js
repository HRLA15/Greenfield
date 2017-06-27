import React, { Component } from 'react'
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
import UsersFriends from './UsersFriends'


class UserSideBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      display: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if(this.state.display === false) {
      this.setState({display: true})
    } else {
      this.setState({display: false})
    }
  }

  render() {
    if(this.state.display === true) {
      return <div style={{marginTop: 50 + "px"}}>
      <UsersFriends handleClick={this.handleClick} display={this.state.display} friends={this.props.friends} />
      </div>
    }

    return (
      <div>
        <h5 style={{marginTop: 45 + "px"}}>{this.props.username}</h5>
        <Avatar style={{marginTop: 50 + "px", marginLeft: 20 + "px"}}
          src="http://www.provo2.com/health-fitness/wp-content/uploads/2010/11/default-avatar.jpg"
          size={100}
        />
          <List style={{marginTop: 25 + "px"}}>
            <Link to ='/create'>
            <ListItem primaryText="Create" leftIcon={<ContentSend />} />
            </Link>
            <ListItem primaryText="Friends" leftIcon={<ActionGrade />} onClick={this.handleClick} />
            {/*<ListItem primaryText="My Trips" leftIcon={<ContentInbox />} />*/}
          </List>
          <Divider />
          <List>
            {/*{<ListItem primaryText="Invites" rightIcon={<ActionInfo />} />*/}
            <ListItem primaryText="Jay is hot" rightIcon={<ActionInfo />} />
          </List>
      </div>
    )
  }

}

export default UserSideBar