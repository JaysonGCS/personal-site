import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Typography, Divider, IconButton, Popover } from '@material-ui/core';
import { useState } from 'react';

const SideBarFooter = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return <div style={{}}>
        <Divider variant={"middle"} />
        <Typography variant="overline" gutterBottom>get in touch</Typography>
        <br />
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
        >
            <Typography className={"h6"}> goh.chung.sern@gmail.com </Typography>
        </Popover>
        <IconButton aria-label="Email" onClick={handlePopClick} >
            <EmailIcon />
        </IconButton>
        <IconButton aria-label="Linkedin" onClick={() => window.open("https://www.linkedin.com/in/jaysongcs/", "_blank")}>
            <LinkedInIcon />
        </IconButton>
    </div>
}

export default SideBarFooter;