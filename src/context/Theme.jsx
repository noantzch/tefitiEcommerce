import { createContext, useState } from 'react';

export const Theme = createContext({});

const ThemeProvider = ({children}) =>{
    const[darkmode, setDarkmode] = useState(false)
    return (
    <Theme.Provider value={{darkmode, setDarkmode}}>
        {children}
    </Theme.Provider>
    )
}

export default ThemeProvider
