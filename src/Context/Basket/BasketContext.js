import { createContext, useReducer } from "react";
import { basketReducer } from "./BasketReducer";


const BasketContext = createContext();



// children props are what is surrounded by the provider in App.js
export const BasketProvider = ({ children }) => {

    
    const initalState = {
        baskets: [],
        loading: false,
        basketId: "",
        basket: {}
    }
    
    const [state, basketDispatch] = useReducer(basketReducer, initalState);

   



    return <BasketContext.Provider value={{...state, basketDispatch}}>
        {children}
        </BasketContext.Provider>

}

export default BasketContext;