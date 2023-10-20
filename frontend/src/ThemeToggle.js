import React, { useState } from 'react';
import './themeToggle.css'
function ThemeToggle() {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
