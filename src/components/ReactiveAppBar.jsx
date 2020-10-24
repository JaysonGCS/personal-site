import React from 'react';
import { Paper, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideBarMain from './SideBarMain';
import SideBarFooter from './SideBarFooter';

const ReactiveAppBar = (props) => {
    let isSmallScreen = false;
    if (props.isSmallScreen !== undefined) {
        isSmallScreen = props.isSmallScreen;
    }

    let component = () => {
        if (isSmallScreen) {
            return (
                <AppBar >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar >)
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