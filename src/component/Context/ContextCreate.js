import React, { createContext } from 'react';
import useFirebase from '../Firebase/useFirebase';

export const MyContext=createContext()
const ContextCreate = ({children}) => {
    const FirebaseData=useFirebase()
    return (
        <MyContext.Provider value={FirebaseData}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextCreate;