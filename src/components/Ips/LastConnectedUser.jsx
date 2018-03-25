import React from 'react'
import IpActivity from './IpActivity'
import { Heading } from '../styled/Heading'


export const getLastConnectedUser = (ipList) => {
  const sortedByDate = ipList.sort(function(a,b){
    return new Date(b.timestamp) - new Date(a.timestamp);
  })

  return sortedByDate[0]
}

export default function LastConnectedUser({ ipList }) {
  const lastConnectedUser = getLastConnectedUser(ipList)
  return (
      <div>
        <Heading>Most recently connected user</Heading>
        <hr />
        <IpActivity ip={lastConnectedUser} />
      </div>
  )
}
