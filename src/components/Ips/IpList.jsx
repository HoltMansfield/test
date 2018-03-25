import React from 'react'
import IpActivity from './IpActivity'
import { Heading } from '../styled/Heading'


export default function IpList({ ipList }) {
  return (
    <div>
      <Heading>IP addresses currently viewing</Heading>
      <hr />
      {ipList.map((ip, index) => <IpActivity ip={ip} key={index} />)}
    </div>
  )
}
