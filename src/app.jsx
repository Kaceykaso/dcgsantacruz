import React from 'react'
import { Button, MenuList, MenuListItem, Separator, styleReset, Toolbar, Window, WindowContent, WindowHeader } from 'react95'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

/* Pick a theme of your choice */
import vaporTeal from 'react95/dist/themes/vaporTeal';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={vaporTeal}>
      <Window  resizable className='window'>
        <WindowHeader className='window-title'>
            <span>DCG-Santa-Cruz.exe</span>
        </WindowHeader>
        <Toolbar>
        <Button variant='menu' size='sm'>
            File
        </Button>
        <Button variant='menu' size='sm'>
             Edit
        </Button>
        <Button variant='menu' size='sm' disabled>
             Save
         </Button>
        </Toolbar>
        <WindowContent>
           <p>
             Welcome to DCG Santa Cruz (formerly DC831)
             </p>
            <p>
                Join us @ link
            </p>
        </WindowContent>
      </Window>
      
    </ThemeProvider>
  </div>
);

export default App