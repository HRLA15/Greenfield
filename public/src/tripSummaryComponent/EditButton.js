import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';


const EditButton = ({handleEditButtonClick}) => (
  <div style={{marginLeft: 20 + "px"}}>
    <RaisedButton label="Edit Trip" secondary={true} onClick={handleEditButtonClick}/>
  </div>
)

export default EditButton