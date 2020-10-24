import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Avatar, Typography } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    avatarSmall: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    avatarLarge: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginLeft: "auto",
        marginRight: "auto",
    },
    avatarWrapper: {
        display: "inline-block",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
    }
}));

const getSelectorFromPathName = (pathname) => {
    if (pathname === "/projects") {
        return 2
    } else if (pathname === "/resume") {
        return 3
    } else {
        return 1;
    }
}

const SideBarMain = () => {
    const classes = useStyles();
    const location = useLocation();
    const [selectedIndex, setSelectedIndex] = React.useState(getSelectorFromPathName(location.pathname));
    const history = useHistory();
    const handleListItemClick = (event, index, link) => {
        setSelectedIndex(index);
        history.push(link);
    };

    return <div >
        <List >
            <ListItem
                button
                onClick={(event) => handleListItemClick(event, 1, "/")}
            >
                <div className={classes.avatarWrapper}>
                    <Avatar alt="Jayson" src={process.env.PUBLIC_URL + "/static/images/avatar/me.jpg"} className={classes.avatarLarge} />
                    <Typography variant="h5" gutterBottom>Jayson (Goh Chung Sern)</Typography>
                    <Typography variant="h6" gutterBottom>"I am a..."</Typography>
                </div>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2, "/projects")}
            >
                <ListItemText primary="Projects" />
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3, "/resume")}
            >
                <ListItemText primary="Resume" />
            </ListItem>
        </List>
    </div>

}

export default SideBarMain;