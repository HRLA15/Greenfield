import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';

//delete this after AUTHO WORKS
import UserHome from './src/userHomePageComponent/UserHome'

const routes = makeMainRoutes();

//DELETE THIS ONCE AUTHO WORKS AND UNCOMMENT BELOW
// ReactDOM.render(
//   <UserHome />,
//   document.getElementById('root')
// );

// USE THIS ONCE AUTHO WORKS
ReactDOM.render(
  routes,
  document.getElementById('root')
);
