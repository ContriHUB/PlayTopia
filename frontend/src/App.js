import React from "react";
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
import { darkTheme, lightTheme } from "./themes" // Import the themes
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
// import ThemeChange from './ThemeChange'

function App() {
  const [darkMode, setDarkMode] = useState(false); // Initial theme mode is light

  const toggleTheme = () => {
    console.log(darkMode)
    setDarkMode(!darkMode);
  };
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <>
      <ThemeProvider theme={theme}>
        <button onClick={toggleTheme} >Toggle Theme</button>
        <Router >
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Redirect to="/dashboard" />
            </Route>
          </Switch>

        </Router>
      </ ThemeProvider>
      <AlertNotification />

    </>
  );
}

export default App;
