import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;

    a {
      color: ${p => p.theme.foreground};    
    }
  }

   body {
    background-color: ${p => p.theme.background}; 
    color: ${p => p.theme.foreground};

    *::selection {
      background-color: ${p => p.theme.selectionBackground};
    }
   }
`;
