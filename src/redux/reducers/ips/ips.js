const initialState = []

const ips = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IP_LIST':
      return action.ips
    default:
      return state
  }
}

export default ips
