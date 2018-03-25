import * as actions from './ips';

describe('ips actions', () => {
  it('setIpList should create SET_IP_LIST action', () => {
    const expected = {};

    expect(actions.setIpList(expected)).toEqual({
      type: 'SET_IP_LIST',
      ips: expected,
    });
  });
});
