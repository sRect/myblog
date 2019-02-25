import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body, html {
  font-size: 14px;
  color: #333;
  background-color: #fcfcfc;
}

.App {
  padding-top: 60px;
  width: 100%;
  height: 100%;
}
`

export default GlobalStyle;