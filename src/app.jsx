import React, {useState} from 'react';
import { 
    Anchor,
    AppBar, 
    Avatar,
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
                                👨‍💻 Made with
                                </span>
                            </MenuListItem>
                            <MenuListItem>
                                <span role='img' aria-label='📁'>
                                📁 React95
                                </span>
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
  <div className='screen'>
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
              <Anchor href="https://forms.gle/piGX4aVSs5yKFpRc6" target="_blank">Let us know here</Anchor>, or send us an <Anchor href="mailto:dcgsantacruzorg@gmail.com">email</Anchor>.
            </GroupBox>
            <br />
           <Frame variant='well' className='footer'>
              Just another <Anchor href="https://forum.defcon.org/social-groups" target="_blank">DEF CON Group</Anchor>
           </Frame>
        </WindowContent>
      </Window>
      
      <FunCounter />
        <Avatar noBorder size={150} src='https://photos.app.goo.gl/iPDyx4hnkqoiJmyeA' />
    </ThemeProvider>
  </div>
);

export default App