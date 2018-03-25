import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LastConnectedUser, { getLastConnectedUser } from './LastConnectedUser'


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
  const wrapper = shallow(<LastConnectedUser {...props} />)

  expect(toJson(wrapper)).toMatchSnapshot()
})

it('getLastConnectedUser returns the most recent visitor', () => {
  const firstUser = {
    ip: '192.168.0.1',
    timestamp: new Date('January 1, 1990')
  }
  const secondUser = {
    ip: '192.168.0.100',
    timestamp: new Date('January 2, 1991')
  }
  const ipList = [firstUser, secondUser]
  const actual = getLastConnectedUser(ipList)

  expect(actual).toEqual(secondUser)
})
