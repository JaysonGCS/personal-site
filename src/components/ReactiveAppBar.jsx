import React from 'react';
import { Paper, AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideBarMain from './SideBarMain';
import SideBarFooter from './SideBarFooter';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const getSelectorFromPathName = (pathname) => {
    if (pathname === "/projects") {
        return 2
    } else if (pathname === "/resume") {
        return 3
    } else {
        return 1;
    }
}

const ReactiveAppBar = (props) => {
    let isSmallScreen = false;
    let [isDrawerOpen, setDrawerStatus] = useState(false)
    if (props.isSmallScreen !== undefined) {
        isSmallScreen = props.isSmallScreen;
    }
    const location = useLocation();
    const [selectedIndex, setSelectedIndex] = React.useState(getSelectorFromPathName(location.pathname));
    const history = useHistory();
    const handleListItemClick = (event, index, link) => {
        setSelectedIndex(index);
        history.push(link);
    };

    let component = () => {
        if (isSmallScreen) {
            return (
                <React.Fragment>
                    <Drawer anchor={"top"} open={isDrawerOpen} onClose={() => setDrawerStatus(false)}>
                        <List>
                            <ListItem
                                button
                                selected={selectedIndex === 1}
                                onClick={(event) => {
                                    handleListItemClick(event, 1, "/")
                                    setDrawerStatus(false)
                                }}>
                                <ListItemText primary="About" />
                            </ListItem>
                            <ListItem
                                button
                                selected={selectedIndex === 2}
                                onClick={(event) => {
                                    handleListItemClick(event, 2, "/projects")
                                    setDrawerStatus(false)
                                }}>
                                <ListItemText primary="Projects" />
                            </ListItem>
                            <ListItem
                                button
                                selected={selectedIndex === 3}
                                onClick={(event) => {
                                    handleListItemClick(event, 3, "/resume")
                                    setDrawerStatus(false)
                                }}>
                                <ListItemText primary="Resume" />
                            </ListItem>
                        </List>
                    </Drawer>
                    <AppBar >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={() => setDrawerStatus(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar >
                </React.Fragment>
            )
        } else {
            return (
                <Paper className="container-side-bar" square >
                    <SideBarMain className="item-side-bar-main" isSmallScreen={isSmallScreen} />
                    <SideBarFooter className="item-side-bar-footer" isSmallScreen={isSmallScreen} />
                </Paper>
            )
        }

    }

    return component();
}

export default ReactiveAppBar;