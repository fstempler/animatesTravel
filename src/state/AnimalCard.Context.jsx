import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [option, setOption] = useState('');

    

    return (
        <AppContext.Provider 
            value={{ option, setOption }}>
                {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};