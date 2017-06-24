import React, { Component } from 'react'

const UserUpcomingTripEntry = ({upcomingTrip, handleEntryClick}) => {
  return (
    <tr>
      <td onClick={() => (
        handleEntryClick(upcomingTrip.id)
      )}>{upcomingTrip.title}</td>
    </tr>
  )
}

export default UserUpcomingTripEntry