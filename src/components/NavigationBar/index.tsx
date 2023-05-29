import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Drawer, AppBar, List, Box, Toolbar, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import {SidebarLink} from './interfaces'

const appMenuItems: Array<SidebarLink> = [
    {
        id: 'bank',
        text: 'Banks',
        link: '/banks',
        icon: AccountBalanceIcon
    },
    {
        id: 'card',
        text: 'Cards',
        link: '/cards',
        icon: CreditCardIcon
    },
    {
        id: 'duemove',
        text: 'Due Moves',
        link: '/due-moves',
        icon: CreditCardIcon
    },
    {
        id: 'move',
        text: 'Moves',
        link: '/moves',
        icon: CreditCardIcon
    },
];

const NavigationBar: React.FC = () => {
    const [stateMenu, setStateMenu] = useState(false);
    const openMenu = () => {
        setStateMenu(!stateMenu);
    };
    const buildMenu = (appMenuItem: SidebarLink) => {
        return (
            <ListItem key={appMenuItem.id}>
                <Link href={appMenuItem.link}>
                    <ListItemButton>
                        <ListItemIcon>
                            <appMenuItem.icon/>
                        </ListItemIcon>
                        <ListItemText>{appMenuItem.text}</ListItemText>
                    </ListItemButton>
                </Link>
            </ListItem>
        );
    }

    return (
        <>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={(openMenu)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor='left'
                open={stateMenu}
                onClose={openMenu}
            >
                <Box
                    sx={{width: 250}}
                    role="presentation"
                    onClick={openMenu}
                >
                    <List>
                        {appMenuItems.map((appMenuItem:SidebarLink) =>
                            buildMenu(appMenuItem)
                        )}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default NavigationBar;
