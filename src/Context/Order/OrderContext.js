import { createContext, useReducer } from "react";
import { orderReducer } from "./OrderReducer";


const OrderContext = createContext();



// children props are what is surrounded by the provider in App.js
export const OrderProvider = ({ children }) => {


    const initalState = {
        orders: [],
        loading: false,
        order: {}   
     
    }

    const [state, orderDispatch] = useReducer(orderReducer, initalState);





    return <OrderContext.Provider value={{ ...state, orderDispatch }}>
        {children}
    </OrderContext.Provider>

}

export default OrderContext;