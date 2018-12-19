import { injectGlobal } from 'styled-components'

injectGlobal`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  outline: none;
}

body {
  background: #93b6e5;
  text-rendering: optimizeSpeed !important;
  -webkit-font-smoothing: antialiased ! important;
}
`
