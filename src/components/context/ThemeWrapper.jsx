import React, { useState, useEffect } from 'react'

import { ThemeContext, themes } from './themeContext'

export default function ThemeWrapper({children}) {
    // theme state

    const [theme, setTheme] = useState(themes.light);

    function changeTheme(newTheme) {
        setTheme(newTheme);
    }
    useEffect(() => {
        document.body.className = `${theme}-theme`;
    }, [theme]);
  return (
    <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
