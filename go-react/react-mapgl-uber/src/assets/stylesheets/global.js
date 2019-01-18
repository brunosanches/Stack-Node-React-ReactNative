import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
`

export const ImgMarker = styled.img`
  border-radius: 50%;
  border-radius: 50%;
  width: 48px;
  height: 48px;
`

export default GlobalStyle
