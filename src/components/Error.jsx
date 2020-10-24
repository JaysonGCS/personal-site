import React from 'react';
import Paper from '@material-ui/core/Paper';

// const theme = createMuiTheme({
//     typography: {
//         useNextVariants: true,
//     },
//     palette: {
//         background: { paper: fade('#339999', 0.6) }
//     }
// });

const Error = () => {

    return <React.Fragment>
        <Paper
            elevation={0}
        >
            <div className="content">Error: Page not found :( </div>
        </Paper >
    </React.Fragment>
}

export default Error;