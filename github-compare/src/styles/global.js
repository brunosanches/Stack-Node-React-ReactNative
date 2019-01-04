import { createGlobalStyle } from 'styled-components'

import 'font-awesome/css/font-awesome.min.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #9b65e6;
  }
`

export default GlobalStyle
