import React, { Component } from 'react'

const UserPreviousTripEntry = ({previousTrip, handleEntryClick}) => {
  return (
    <tr>
      <td onClick={() => (
        handleEntryClick(previousTrip.title)
      )}>{previousTrip.title}</td>
    </tr>
  )
}

export default UserPreviousTripEntry