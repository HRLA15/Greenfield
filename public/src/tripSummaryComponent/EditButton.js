import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

<<<<<<< HEAD

=======
>>>>>>> 9a69bd9a3eb3e97615c4ff8a6aaafc62c1aaab86
// is the edit button click
const EditButton = ({handleEditButtonClick}) => (
  <div style={{marginLeft: 20 + "px"}}>
    <RaisedButton label="Edit Trip" secondary={true} onClick={handleEditButtonClick}/>
  </div>
)

export default EditButton