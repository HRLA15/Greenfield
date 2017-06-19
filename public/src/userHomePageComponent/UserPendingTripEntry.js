import React, { Component } from 'react'

const UserPendingTripEntry = ({ pendingTrip, handleEntryClick }) => (
  <tr>
    <td onClick={() => (
      handleEntryClick(pendingTrip.title)
    )}>{pendingTrip.title}</td>
  </tr>
)


export default UserPendingTripEntry