import ips from './ips'
import * as actions from '../../actions'


describe('ips reducer', () => {
  const expected = []

  it('should handle initial state', () => {
    expect(ips(undefined, {})).toEqual(expected)
  })

  it('ips should create SET_SHOW_OVERLAY action', () => {
    const expected = ['196.168.1.0']

    expect(actions.ips.setIpList(expected)).toEqual({
      type: 'SET_IP_LIST',
      ips: expected,
    })
  })
})
