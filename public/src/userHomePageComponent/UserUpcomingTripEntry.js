import React, { Component } from 'react'

const UserUpcomingTripEntry = ({upcomingTrip, handleEntryClick}) => {
  return (
    <tr>
      <td onClick={() => (
        handleEntryClick(upcomingTrip.title)
      )}>{upcomingTrip.title}</td>
    </tr>
  )
}

export default UserUpcomingTripEntry