import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './src/Home';
import Callback from './Auth/Callback/Callback.js';
import Auth from './Auth/Auth.js';
import history from './src/history';
import Create from './src/createTripPageComponent/Create';
import Event from './src/tripSummaryComponent/TripSummary'
import Landing from './src/LandingPage'
import Navbar from './src/navbarComponent/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { getOneUser, postNewUser } from './src/userHomePageComponent/UserHomeAxiosRoutes'
import Settings from './src/settingPageComponent/UserProfile'

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

let handleCreateInputToEvent = ()=>{
  
}

export const makeMainRoutes = () => {
  injectTapEventPlugin()
  let userId = null

  if(auth.isAuthenticated()) {
    auth.getUserInfo().client.userInfo(localStorage.access_token, function (err, user) {
      userId = user.sub
      postNewUser(user.sub)
      .then((res) => {
        console.log('the new user?!', res.data)
        getOneUser(user.sub)
          .then((res) => {
            console.log('get one user?!', res.data)
            localStorage.setItem('userId', res.data[0].id)
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
    })
  }
  
  return (
      <BrowserRouter history={history}>
        <MuiThemeProvider>
        <div>
          <Route path="/" render={(props) => <Navbar auth={auth} userId={localStorage.userId} {...props} />} />
          <Route exact={true} path="/" component={Landing}/>
          <Route path="/home" render={(props) => <Home auth={auth} userId={localStorage.userId} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Home auth={auth} userId={localStorage.userId} {...props} /> 
          }}/>
          <Route path="/create" render={(props) => <Create auth={auth} userId={localStorage.userId} {...props}/>}/>
          <Route path="/event/:tripId" render={(props) => <Event auth={auth} userId={localStorage.userId} {...props}/>}/>
          <Route path="/settings" render={(props) => <Settings auth={auth} userId={localStorage.userId} {...props}/>}/>
          <Route path="/edit/:tripId" render={(props) => <Create auth={auth} userId={localStorage.userId} {...props}/>}/>
          {/*<Route path="/event" render={(props) => <Event auth={auth} {...props}/>}/>*/}
       
        </div>
          </MuiThemeProvider>
      </BrowserRouter>
  );
}