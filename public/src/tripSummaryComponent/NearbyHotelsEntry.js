import React, { Component } from 'react'

const NearbyHotelsEntry = ({hotelObj, handleVoteClick}) => (
  <tr>
    <td onClick={() => (handleVoteClick(hotelObj.id))}>{hotelObj.hotelName}</td>
  </tr>
)

export default NearbyHotelsEntry