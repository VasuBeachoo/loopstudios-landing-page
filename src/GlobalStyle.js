import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  &:root {
    --White: hsl(0, 0%, 100%);
    --Black: hsl(0, 0%, 0%);
    --Dark-Gray: hsl(0, 0%, 55%);
    --Very-Dark-Gray: hsl(0, 0%, 41%);

    --heading-font: "Josefin Sans", sans-serif;
    --body-font: "Alata", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
