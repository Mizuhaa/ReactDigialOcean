import { useThemeContext } from "../../Context/ThemeContext/ThemeContext";
import { useState } from "react";
import HalfOpenedEyesSvg from "./HalfOpenedEyesSvg";
import OpenEyesSvg from "./OpenEyesSvg";
import ClosedEyesSvg from "./ClosedEyesSvg";

export default function ThemePickerLogo() {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { theme, setTheme } = useThemeContext();

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('theme', theme);
        console.log(isCurrentDark ? 'light' : 'dark')
    };
    return (
        <div className="relative h-full w-full">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="300.000000pt" height="283.000000pt" viewBox="0 0 300.000000 283.000000"
                preserveAspectRatio="xMidYMid meet"
                className="h-full w-full fill-gray-100 dark:fill-gray-50"
                onMouseEnter={() => setIsHovered(!isHovered)}
                onMouseLeave={() => setIsHovered(!isHovered)}
                onClick={handleThemeChange} >
                {isHovered ? <HalfOpenedEyesSvg /> : theme === "dark" ? <ClosedEyesSvg /> : <OpenEyesSvg />}
            </svg>
        </div>
    )
}