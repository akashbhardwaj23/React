// Different Approach

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// it will give you the values
export default function useTheme(){
    return useContext(ThemeContext)
}