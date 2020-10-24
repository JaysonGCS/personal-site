import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Error from './components/Error';
import ReactiveAppBar from './components/ReactiveAppBar';
import { createMuiTheme, ThemeProvider, fade } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    background: { paper: fade('#339999', 0.6) }
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: { backgroundColor: fade('#339999', 0.6) }
    }
  }
});

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

function App() {
  const size = useWindowSize();
  let [isSmallScreen, setIsSmallScreen] = useState(false);
  const shouldSetIsSmallScreen = (size.width >= 1250) ? false : true;
  useEffect(() => {
    setIsSmallScreen(shouldSetIsSmallScreen);
  }, [shouldSetIsSmallScreen])


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="container">
          <div className="item-side-bar">
            <ReactiveAppBar isSmallScreen={isSmallScreen} />
          </div>
          <div className={isSmallScreen ? "item-main-small" : "item-main"}>
            <Switch >
              <Route path="/" component={Home} exact />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
