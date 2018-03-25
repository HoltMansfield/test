import axios from 'axios'
import { notify } from 'react-notify-toast'


const serverRoot = 'http://localhost:3000'

const getErrorMessage = result => {
  if(result.response && result.response.data && result.response.data.message) {
    return result.response.data.message
  }

  return 'Server is down'
}

const displayError = (data, dispatch) => {
  const errorMessage = getErrorMessage(data)

  notify.show(errorMessage, 'error', 2500)
  return Promise.reject(new Error(errorMessage))
}


export const get = (url, _options) => {
  return dispatch => {

    return axios.get(`${serverRoot}/${url}`)
      .then(response => {
        return response.data;
      })
      .catch(data => displayError(data, dispatch))
  }
}
