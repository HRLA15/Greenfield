import React, { Component } from 'react'

//TODOS:
//Add a confirm button that will allow user to confirm the trip
//Add a unconfirm button that will allow users to unconfirm the trip 

const UserPendingTripEntry = ({ pendingTrip, handleEntryClick }) => (
  <tr>
    <td onClick={() => (
      handleEntryClick(pendingTrip.title)
    )}>{pendingTrip.title}</td>
  </tr>
)


export default UserPendingTripEntry