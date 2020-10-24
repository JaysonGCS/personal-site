import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Error from './components/Error';
import Navbar from './components/Navbar';
import SideBarFooter from './components/SideBarFooter';
import { createMuiTheme, ThemeProvider, fade } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    background: { paper: fade('#339999', 0.6) }
  }
});

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="item-side-bar">
          <div className="container-side-bar">
            <Navbar className="item-side-bar-main" />
            <SideBarFooter className="item-side-bar-footer" />
          </div>
        </div>
        <div className="item-main">
          <ThemeProvider theme={theme}>
            <Switch >
              <Route path="/" component={Home} exact />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route component={Error} />
            </Switch>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
