import React, { Component } from 'react'
import Create from '../createTripPageComponent/Create'

const CreateTripButton = ({handleCreateTripButtonClick}) => (
  <button onClick={handleCreateTripButtonClick}>Create Trip!</button>
)

export default CreateTripButton