import { createContext, useContext, useState, ReactNode } from "react";

export const ThemeContext = createContext({})

interface Children {
    children: ReactNode;
}


export const ThemeContextProvider = ({children}: Children) => {
    const [Theme,setTheme] = useState<string>('Light')
    const values = {Theme,setTheme}
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext)

    return context
}