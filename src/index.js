import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from 'App/App'
import store from './redux/create-store'


const rootElement = document.getElementById('root')
const app =
  (
    <Provider store={store}>
      <App />
    </Provider>
  )

ReactDOM.render(
  app,
  rootElement,
)
