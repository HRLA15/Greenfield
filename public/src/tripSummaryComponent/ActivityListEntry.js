import React, { Component } from 'react'

const ActivityListEntry = ({activity, handleVoteClick}) => (
  <tr>
    <td onClick={() => (handleVoteClick(activity.id))}>{activity.name}</td>
  </tr>
)

export default ActivityListEntry
