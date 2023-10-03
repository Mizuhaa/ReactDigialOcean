import { createContext, useContext, useMemo, useState } from "react";

export interface ITheme {
    theme: string,
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext({} as ITheme);

export const ThemeProvider = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => {
    const [theme, setTheme] = useState<string>("");

    const contextValue = useMemo(() => {
        return {
            theme,
            setTheme,
        };
    }, [theme]);

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};