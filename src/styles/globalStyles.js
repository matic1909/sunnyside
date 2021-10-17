import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --soft-red: hsl(7, 99%, 70% );
    --yellow: hsl(51, 100%, 49% );
    --white: hsl(0, 0%, 100%);
    --grayish-blue: hsl(210, 4%, 67%);
    --dark-desaturated-cyan: hsl(167, 40%, 24%);
    --dark-blue: hsl(198, 62%, 26%);
    --dark-grayish-blue: hsl(232, 10%, 55%);
    --dark-moderate-cyan: hsl(168, 34%, 41%);
    --darker-blue: hsl(212, 27%, 19%);
    --darker-grayish-blue: hsl(213, 9%, 39%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    font-family: "Fraunces", sans-serif;
    font-size: 18px;
  }
`;

export default GlobalStyle;
