import React, { Component } from 'react'
import { Provider } from 'react-redux'

import GlobalStyle from './assets/stylesheets/global'

import './config/reactotron'
import store from './store'

import Main from './pages/main'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Main />
      </Provider>
    )
  }
}

export default App
