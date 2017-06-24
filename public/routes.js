import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './src/App';
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


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  injectTapEventPlugin()

  return (
      <BrowserRouter history={history}>
        <MuiThemeProvider>
        <div>
          <Route path="/" render={(props) => <Navbar auth={auth} {...props} />} />
          <Route exact={true} path="/" component={Landing}/>
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Home auth={auth} {...props} /> 
          }}/>
          <Route path="/create" render={(props) => <Create auth={auth} {...props}/>}/>
          <Route path="/event/:tripId" render={(props) => <Event auth={auth} {...props}/>}/>
       
        </div>
          </MuiThemeProvider>
      </BrowserRouter>
  );
}