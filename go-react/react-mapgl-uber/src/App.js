import React, { Component, Fragment } from 'react'
import GlobalStyle from './assets/stylesheets/global'

import Main from './pages/main'

class App extends Component {
  render () {
    return (
      <Fragment>
        <GlobalStyle />
        <Main />
      </Fragment>
    )
  }
}

export default App
