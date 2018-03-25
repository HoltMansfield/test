import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import IpActivity from './IpActivity'


it('renders correctly', () => {
  const props = {
      ipList: [
        {
          ip: '192.168.0.1',
          timestamp: new Date('January 1, 1990')
        },
        {
          ip: '192.168.0.100',
          timestamp: new Date('January 2, 1991')
        }
      ]
  }
  const wrapper = shallow(<IpActivity {...props} />)

  expect(toJson(wrapper)).toMatchSnapshot()
})
