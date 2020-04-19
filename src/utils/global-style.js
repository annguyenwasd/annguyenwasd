import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

   body {
    background-color: ${p => p.theme.background}; 
    color: ${p => p.theme.foreground};

    *::selection {
      background-color: ${p => p.theme.selectionBackground};
    }

    a {
      color: ${p => p.theme.foreground};    
      text-decoration: none;
    }

   

    ul > li > a {
      color: ${p => p.theme.link.normal};
    }
  } 
}`;
