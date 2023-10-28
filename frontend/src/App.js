import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";
import AlertNotification from "./shared/components/AlertNotification";
import { ThemeProvider,createTheme } from "@mui/material/styles";

import "./App.css";

import ChatBot from "./migratedPages/chatbot";
import MemGame from './migratedPages/memory-game/src/memGame';
import Game2048 from "./migratedPages/2048-animated/src/Game";

const lightTheme = createTheme({

});
const darkTheme = createTheme({

});


function App() {
  const [darkMode, setDarkMode] = useState(false); // Initial theme mode is light

  const toggleTheme = () => {
    console.log(darkMode)
    setDarkMode(!darkMode);
  };
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    // <>

      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard toggleTheme={toggleTheme} />
          </Route>
          <Route path="/chatbot">
            <ChatBot/>
          </Route>
          <Route path="/memoryGame">
            <MemGame/>
          </Route>
          <Route path="/2048-Animated">
            <Game2048/>
          </Route>
          <Route path="/">
            <Redirect to="/dashboard" />
          </Route>
         
        {/* </Switch> */}

       
        {/* <Router > */}
          {/* <Switch> */}
            {/* <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard toggleTheme={toggleTheme}/>
            </Route>
            <Route path="/">
              <Redirect to="/dashboard" />
            </Route> */}

          </Switch>
        </Router>
        <AlertNotification />
      </ThemeProvider>
        
    // </>
  );
}

export default App;
