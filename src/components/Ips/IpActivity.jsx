import React from 'react'
import styled from 'styled-components'


const Grid = styled.div`
  padding-bottom: 10px;
`
const IpColumn = styled.span`
  float: left;
  width: 95px;
`
const LastConnectedColumn = styled.span`
  font-style: italic;
`

export default function ({ ip }) {
  if (!ip) return null

  return (
    <Grid>
      <IpColumn>{ ip.ip }</IpColumn>
      <LastConnectedColumn>Last Connected at: { ip.timestamp }</LastConnectedColumn>
    </Grid>
  )
}
