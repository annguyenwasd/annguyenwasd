import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  a {
    color: ${p => p.theme.foreground};    
    text-decoration: none;
  }

   body {
    background-color: ${p => p.theme.background}; 
    color: ${p => p.theme.foreground};

    *::selection {
      background-color: ${p => p.theme.selectionBackground};
    }
   }
`;
