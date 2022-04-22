import { createContext, useReducer } from "react";
import { customerReducer } from "./CustomerReducer";


const CustomerContext = createContext();



// children props are what is surrounded by the provider in App.js
export const CustomerProvider = ({ children }) => {

    //initialize Customers as an empty array and loading as true
    const initalState = {
        customers: [],
        customer: {},
        loading: false,
        customerRole:''
    }


    //call useReducer and passin the productReducer and inital state
    const [state, customerDispatch] = useReducer(customerReducer, initalState);

 
    //Set Loading
//  const setLoading = () => dispatch({type: 'SET_LOADING'})
 
 

    
    return <CustomerContext.Provider value={{...state, customerDispatch}}>
        {children}
        </CustomerContext.Provider>
      
    }



export default CustomerContext;