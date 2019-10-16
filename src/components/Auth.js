import React, {useEffect, useState} from "react";
import fbApp from "../FirebaseConfig";

// create a context to store user across all components
export const AuthContext = React.createContext();

// Component (func) to monitor user on authentication change
export const AuthProvider = ({children}) => {

    // Use state hook that stores state in currentUser
    const [currentUser, setCurrentUser] = useState(null);

    // whenever page reloaded
    useEffect(() => {
        fbApp.auth().onAuthStateChanged(setCurrentUser);
      }, []);

    return (
    <AuthContext.Provider
        value={{
        currentUser
        }}
    >
        {children}
    </AuthContext.Provider>
    );
};