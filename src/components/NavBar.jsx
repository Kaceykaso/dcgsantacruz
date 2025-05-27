import React, { useState } from "react";
import { AppBar, Button, MenuList, MenuListItem, Separator, TextInput, Toolbar } from "react95";
import styled from "styled-components";


const Wrapper = styled.div`
    padding: 5em;
    background: ${({ theme }) => theme.desktopBackground};
`;

export function NavBar() {
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