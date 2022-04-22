import { createContext, useReducer } from "react";
import { adminReducer } from "./AdminReducer";


const AdminContext = createContext();



// children props are what is surrounded by the provider in App.js
export const AdminProvider = ({ children }) => {

    //initialize Admins as an empty array and loading as true
    const initalState = {
        admins: [],
        admin: {},
        loading: false,
        role: ""
    }


    //call useReducer and passin the admiReducer and inital state
    const [state, adminDispatch] = useReducer(adminReducer, initalState);

 


    
    return <AdminContext.Provider value={{...state, adminDispatch}}>
        {children}
        </AdminContext.Provider>
      
    }



export default AdminContext;