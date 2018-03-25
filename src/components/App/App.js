import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as actions from '../../redux/actions'
import IpList from '../Ips/IpList'
import LastConnectedUser from '../Ips/LastConnectedUser'


const Grid = styled.div`
  display: flex;
`

const Column = styled.div`
  flex: 1;
  margin: 20px;
`

export class App extends Component {
  componentDidMount() {
    const { getIps, setIps } = this.props

    setInterval(() => {
      getIps()
        .then(response => {
          setIps(response.ipList)
        })
    }, 1000)
  }

  render() {
    const { ipList } = this.props
    return (
      <div>
        <Notifications />
        <Grid>
          <Column>
            <IpList ipList={ipList} />
          </Column>
          <Column>
            <LastConnectedUser ipList={ipList} />
          </Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ipList: state.ips
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIps: user => dispatch(actions.http.get('ips')),
    setIps: ips => dispatch(actions.ips.setIpList(ips))
  }
}

export default connect(() => mapStateToProps, mapDispatchToProps)(App)
