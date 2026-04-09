import React, {createContext} from 'react';

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const user = { name: 'Ktośtam', id: 0}
    return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
    )
};

export default UserProvider;