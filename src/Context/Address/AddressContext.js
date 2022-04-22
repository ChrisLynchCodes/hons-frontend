import { createContext, useReducer } from "react";
import { addressReducer } from "./AddressReducer";


const AddressContext = createContext();



// children props are what is surrounded by the provider in App.js
export const AddressProvider = ({ children }) => {

    //initialize addresses as an empty array and loading as true
    const initalState = {
        addresses: [],
        address: {},
        loading: false,
 
    }


    //call useReducer and passin the addressReducer and inital state
    const [state, addressDispatch] = useReducer(addressReducer, initalState);


 


    
    return <AddressContext.Provider value={{...state, addressDispatch}}>
        {children}
        </AddressContext.Provider>
      
    }



export default AddressContext;