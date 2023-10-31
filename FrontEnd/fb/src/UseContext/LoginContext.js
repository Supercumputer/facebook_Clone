import { useState, createContext } from 'react';

export const UserContext = createContext();

function LogInContext({children}) {

    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('account')) || null)

    const logIn = (userdata) => {
        setUser(userdata.acount)
        sessionStorage.setItem('account', JSON.stringify(userdata.acount));
    }

    const logOut = () => {
        setUser(null);
        sessionStorage.removeItem('account');
    }

    return (
        <UserContext.Provider value={{user, logIn, logOut}}>
            {children}
        </UserContext.Provider>
    );
}

export default LogInContext
