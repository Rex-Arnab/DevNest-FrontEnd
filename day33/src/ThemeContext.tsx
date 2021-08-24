import { createContext } from "react";

export interface ThemeContextType {
    theme: boolean,
    setTheme: (theme: boolean) => void
}

const initalState: ThemeContextType = {
    theme: false,
    setTheme: (theme: boolean) => {}
}

const ThemeContext = createContext<ThemeContextType>(initalState);
export default ThemeContext;