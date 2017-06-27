import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'
import Flight from 'material-ui/svg-icons/device/airplanemode-active'
import PendingTrips from './UserPendingTripsList'


const iconStyles = {
  marginRight: 24,
}

const Login = ({login}) => (
  // is using material ui to render the login in button on the nav bar
  <FlatButton onClick={login} label="Login" />
)

const Logged = ({goTo, logout}) => (
  <IconMenu
    iconButtonElement={
      <IconButton><ActionHome hoverColor={greenA200}/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem onClick={() => (goTo('settings'))} primaryText="Settings" />
    <MenuItem onClick={logout} primaryText="Sign out" />
  </IconMenu>
)

const styles = {
  title: {
    cursor: 'pointer',
    color: 'black'
  }
}

const appBarStyle = {
  backgroundColor: 'white'
}

class Navbar extends Component {
  constructor(props) {
    super(props)

  }
  //uses react router to take you to the url endpoint
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  //function that logs user in using auth0 which is getting passed in
  login() {
    this.props.auth.login();
  }
  //function that logs user out using auth0 whicb is getting passed in as a prop
  logout() {
    this.props.auth.logout();
  }

  render() {
    // prop getting passed in which is a function of auth0 to check if the user
    //logged in and authorized
    const { isAuthenticated } = this.props.auth

    return (
      <div>
        <AppBar
          title={<span style={styles.title} onClick={
            isAuthenticated() ? this.goTo.bind(this, 'home') : this.goTo.bind(this, '')
          }>Triplit</span>}
          titleStyle={{textAlign: "center"}}
          iconElementRight={isAuthenticated() ? <Logged goTo={this.goTo.bind(this)} logout={this.logout.bind(this)}/> : <Login login={this.login.bind(this)}/>}
          iconElementLeft={isAuthenticated() ? <PendingTrips userId={this.props.userId} router={this.goTo.bind(this)}/> : <Flight/>}
          style={appBarStyle}
        />
      </div>
    )
  }
}

export default Navbar