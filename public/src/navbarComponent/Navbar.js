import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import SocialNotificationActive from 'material-ui/svg-icons/social/notifications-active'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'
import Earth from 'material-ui/svg-icons/social/public'

const dummyData = [
  {
    title: 'ChinaTown'
  },
  {
    title: 'KoreaTown'
  }
]

const iconStyles = {
  marginRight: 24,
}

class PendingTrips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pendingTripsArr: []
    }
  }

  componentWillMount() {
    this.setState({
      pendingTripsArr: dummyData
    })
  }

  render() {
    return (
    <IconMenu
      iconButtonElement={<IconButton><SocialNotificationActive hoverColor={red500}/></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      {
        this.state.pendingTripsArr.map((pendingTrip) => (
          <MenuItem primaryText={pendingTrip.title} />
        ))
      }
    </IconMenu>
    )
  }
}

const Login = ({login}) => (
  <FlatButton onClick={login} label="Login" />
)

const Logged = ({logout}) => (
  <IconMenu
    iconButtonElement={
      <IconButton><ActionHome hoverColor={greenA200}/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Settings" />
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

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth

    return (
      <div>
        <AppBar
          title={<span style={styles.title} onClick={
            isAuthenticated() ? this.goTo.bind(this, 'home') : this.goTo.bind(this, '')
          }>TRIP PLANNER</span>}
          titleStyle={{textAlign: "center"}}
          iconElementRight={isAuthenticated() ? <Logged logout={this.logout.bind(this)}/> : <Login login={this.login.bind(this)}/>}
          iconElementLeft={isAuthenticated() ? <PendingTrips /> : <Earth color="green"/>}
          style={appBarStyle}
        />
      </div>
    )
  }
}

export default Navbar