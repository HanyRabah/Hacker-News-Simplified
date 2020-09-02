import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`

export const theme = {
  color: {
    orange: "#FF6C47",
  },
  fontSize: {
    tiny: '10px',
    extra_small: '12px',
    small: '14px',
    default: '16px',
    large: '20px',
    heading: '24px',
  }
};
