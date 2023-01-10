import { createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedLister } from '../firebase/firebase';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
});


export const UserProvider = ({children}) => {
    // Initialize user state with null
    const [currentUser, setCurrentUser ] = useState(null);

    // Generate value object to pass in provider
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedLister((user) => {
            // Create user document in db if user exists
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        
        return unsubscribe;

    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}