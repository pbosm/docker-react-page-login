import React, { createContext, useContext } from 'react';
import LoginProvider from '../../service/providers/LoginProvider';

const LoginProviderContext = createContext<LoginProvider | undefined>(undefined);

export const LoginProviderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const loginProvider = new LoginProvider();

    return (
        <LoginProviderContext.Provider value={loginProvider}>
            {children}
        </LoginProviderContext.Provider>
    );
};

export const useLoginProvider = () => {
    const context = useContext(LoginProviderContext);
    if (context === undefined) {
        throw new Error('useLoginProvider must be used within a LoginProviderProvider');
    }
    return context;
};
