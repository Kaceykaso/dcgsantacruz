import React, {useState} from 'react'
import { Button, Counter, Frame, GroupBox, MenuList, MenuListItem, ScrollView, Separator, styleReset, Toolbar, Window, WindowContent, WindowHeader } from 'react95'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { NavBar } from './components/navbar';
import { FunCounter } from './components/FunCounter';

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
  body {
    background: rgb(0, 128, 128);
  }
  .window {
    width: 500px;
    min-height: 200px;
    z-index: 3;
  }
  .counter {
    display: flex;
    flex-flow: column;
    padding: 1rem;
    margin: -20px 0 0 480px;
    width: 230px;
  }
  .interactive-counter {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 1rem 1rem 0 1rem;
  }

  .interactive-counter button {
    margin-left: 0.5rem;
    height: 51px;
  }
`;


const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={vaporTeal}>
      <NavBar theme={vaporTeal} />
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
          <GroupBox label='Welcome to DCG Santa Cruz'>
              Formerly DC831 and now under new management, our goal is to bring DEF CON mindset and unite ethical hackers year round.
            </GroupBox>
            <br />
            <GroupBox label='Our Mission'>
                Share knowledge, skillsets, and passion for making and hacking in a safe, inclusive space for all levels – from first-timers to seasoned
                InfoSec professionals. Whether you are into lockpicking, hardware hacking, OSINT, reverse engineering, red teaming or blue teaming - 
                there is a place for you here.
            </GroupBox>
            <br />
            <GroupBox label='Join Us'>
              We are looking to meet monthly for 1 hour, once we narrow down a meet space and a schedule.
              We are just getting started, but if this sounds like your jam - sign up and we will be in touch!
            </GroupBox>
            <br />
           <Frame variant='well' className='footer'>
              Just another DEF CON Group
           </Frame>
        </WindowContent>
      </Window>
      
      <FunCounter />
    </ThemeProvider>
  </div>
);

export default App