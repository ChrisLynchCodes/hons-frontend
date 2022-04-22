import { createContext, useReducer } from "react";
import { productReducer } from "./ProductReducer";


const ProductContext = createContext();



// children props are what is surrounded by the provider in App.js
export const ProductProvider = ({ children }) => {

    //initialize products as an empty array and loading as true
    const initalState = {
        products: [],
        loading: false,
        productId:"",
        product:{}
    }


    //call useReducer and passin the productReducer and inital state
    const [state, productDispatch] = useReducer(productReducer, initalState);

 
    //Set Loading
//  const setLoading = () => dispatch({type: 'SET_LOADING'})
 
 

    
    return <ProductContext.Provider value={{...state, productDispatch}}>
        {children}
        </ProductContext.Provider>
      
    }



export default ProductContext;