import React, {useState} from 'react';
import { 
    Anchor,
    AppBar, 
    Button, 
    Counter,  
    Frame, 
    GroupBox, 
    MenuList, 
    MenuListItem, 
    Separator, 
    styleReset, 
    Toolbar, 
    TextInput, 
    Window, 
    WindowContent, 
    WindowHeader 
  } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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

function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <AppBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <Button
                        onClick={() => setOpen(!open)}
                        active={open}
                        style={{ fontWeight: 'bold' }}
                    >
                    <img
                    src=''
                    alt=''
                    style={{ height: '20px', marginRight: 4 }}
                    />
                        Start
                    </Button>
                    {open && (
                        <MenuList
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '100%'
                        }}
                            onClick={() => setOpen(false)}
                        >
                            <MenuListItem>
                                <span role='img' aria-label='👨‍💻'>
                                👨‍💻 Profile
                                </span>
                            </MenuListItem>
                            <MenuListItem>
                                <span role='img' aria-label='📁'>
                                📁
                                </span>
                            My account
                            </MenuListItem>
                            <Separator />
                            <MenuListItem disabled>
                                <span role='img' aria-label='🔙'>
                                    🔙
                                </span>
                                Logout
                            </MenuListItem>
                        </MenuList>
                    )}
                </div>
                <TextInput placeholder='Search...' width={150} />
            </Toolbar>
        </AppBar>
    );
}

function FunCounter() {
    const [ count, setCount ] = useState(0);
    const handleCountClick = () => setCount(count + 1);

    return (
        <Frame className="counter">
            <Counter value={831} minLength={5} size='lg' />
            <div className='interactive-counter'>
                <Counter value={count} minLength={3} />
                <Button onClick={handleCountClick}>Click!</Button>
            </div>
        </Frame>
    )
}

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={vaporTeal}>
      <NavBar />
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
              Formerly DC831 and now under new management, our goal is to bring a DEF CON mindset and unite ethical hackers year round.
            </GroupBox>
            <br />
            <GroupBox label='Our Mission'>
                Share knowledge, skillsets, and passion for making and hacking in a safe, inclusive space for all levels – from first-timers to seasoned
                InfoSec professionals. Whether you are into lockpicking, hardware hacking, OSINT, reverse engineering, red teaming or blue teaming - 
                there is a place for you here.
            </GroupBox>
            <br />
            <GroupBox label='Join Us'>
              Interested in joining our band of merry hackers?
              <br /><br />
              <Anchor href="https://forms.gle/piGX4aVSs5yKFpRc6" target="_blank">Let us know here</Anchor>.
            </GroupBox>
            <br />
           <Frame variant='well' className='footer'>
              Just another <Anchor href="https://forum.defcon.org/social-groups" target="_blank">DEF CON Group</Anchor>
           </Frame>
        </WindowContent>
      </Window>
      
      <FunCounter />
    </ThemeProvider>
  </div>
);

export default App