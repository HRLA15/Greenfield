import React, { Component } from 'react'

const NearbyHotelsEntry = ({hotelObj}) => (
  <tr>
    <td><a href={hotelObj.website} target="_blank">{`Hotel Name: ${hotelObj.hotelName}`}</a> </td>
  </tr>
)

export default NearbyHotelsEntry