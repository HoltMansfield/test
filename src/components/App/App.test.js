import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('App component', () => {
  it('call the server and pushes data into the store', async () => {
    const expectedIpList = []
    const getIps = jest.fn(() => Promise.resolve({
      ipList: expectedIpList
    }))
    const setIps = jest.fn()
    const props = { getIps, setIps }

    // render the actual component
    const wrapper = shallow(<App {...props} />)

    // sleep while setInterval fires and the mock promise resolves
    await sleep(2000)

    // ensure both functions were called
    expect(getIps.mock.calls.length).toBe(1)
    expect(setIps.mock.calls.length).toBe(1)
    // ensure the ipList returned from server gets pushed into the store
    expect(setIps.mock.calls[0][0]).toEqual(expectedIpList)
  })

  it('call the server on an interval', async () => {
    const getIps = jest.fn(() => Promise.resolve({}))
    const setIps = jest.fn()
    const props = { getIps, setIps }

    // render the actual component
    const wrapper = shallow(<App {...props} />)

    // sleep while setInterval fires TWICE and the mock promise resolves
    await sleep(3000)

    // ensure getIps was called TWICE as setInterval continues to fire
    expect(getIps.mock.calls.length).toBe(2)
  })
})
