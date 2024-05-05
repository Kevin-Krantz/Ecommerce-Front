import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
}

html {
  position: relative;
    min-height: 100%;
}

 html, body {
    padding: 0;
    background-color: #eee;

    @media only screen and (max-width: 600px) {
    background-color: unset;
  }
  }

  body {
     margin: 0 0 286px;

     @media only screen and (max-width: 600px) {
      margin: unset;
  }
  }

  #__next {
    
  }
`;

export default GlobalStyles;
