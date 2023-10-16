import React, { useState } from 'react';
import './ThemeChange.css'
function ThemeChange() {
  const [isDarkTheme, setDarkTheme] = useState(false);
    console.log("change");
  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeChange;
