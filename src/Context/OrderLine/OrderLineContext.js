import { createContext, useReducer } from "react";
import { orderLineReducer } from "./OrderLineReducer";


const OrderLineContext = createContext();



// children props are what is surrounded by the provider in App.js
export const OrderLineProvider = ({ children }) => {

    
    const initalState = {
        orderLines: [],
        loading: false,
        orderLine: {}
    }
    
    const [state, orderLineDispatch] = useReducer(orderLineReducer, initalState);

   



    return <OrderLineContext.Provider value={{...state, orderLineDispatch}}>
        {children}
        </OrderLineContext.Provider>

}

export default OrderLineContext;