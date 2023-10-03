import { useThemeContext } from "../../Context/ThemeContext/ThemeContext";
import { useState } from "react";
import ClosedEyes from "./ClosedEyes.svg"
import OpenEyes from "./OpenEyes.svg"
import HalfOpenedEyes from "./HalfOpened.svg"

export default function ThemePicker() {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { theme, setTheme } = useThemeContext();

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('theme', theme);
        console.log("clieck")
    };

    return (
        <div>
            <img src={isHovered ? HalfOpenedEyes : theme === "dark" ? ClosedEyes : OpenEyes} alt="OwlClosedEyes" 
            onClick={handleThemeChange} 
            onMouseEnter={() => setIsHovered(!isHovered)}
            onMouseLeave={() => setIsHovered(!isHovered)}
            />
        </div>
    )
}