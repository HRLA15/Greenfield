import React, { Component } from 'react'
import Create from '../createTripPageComponent/Create'
import { BrowserRouter as Router, Link, Route, History} from 'react-router-dom'

const CreateTripButton = ({handleCreateTripButtonClick}) => (
  <Router>
    <div>
      <Link to={"/create"}>
        <button onClick={handleCreateTripButtonClick}>Create Trip!</button>
      </Link>
    </div>
  </Router>
)

export default CreateTripButton