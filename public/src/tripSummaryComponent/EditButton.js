import React, { Component } from 'react'

const EditButton = ({handleEditButtonClick}) => (
  <div>
    <button onClick={handleEditButtonClick}>Edit Trip</button>
  </div>
)

export default EditButton