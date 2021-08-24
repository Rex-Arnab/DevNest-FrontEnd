import { useContext } from 'react'
import ThemeContext, { ThemeContextType } from './ThemeContext';

const ThemeToggle = () => {
    const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext)
    return (
        <button onClick={() => {
            setTheme(!theme)
        }}>
            {theme ? "Dark" : "Light"}
        </button>
    )
}

export default ThemeToggle;