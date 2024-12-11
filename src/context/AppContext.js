import { createContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const[user, setUser] = useState(null);

    //Auth State Change
    useEffect(() =>{
        onAuthStateChanged(auth, (user) =>{
            if(user) setUser(user);
            else setUser(null);
        });
    }, []);

    return (
        <AppContext.Provider value={{ user }}> {children} </AppContext.Provider>
    )
}
    
export default AppContext;