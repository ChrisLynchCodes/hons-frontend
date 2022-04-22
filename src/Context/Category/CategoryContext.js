import { createContext, useReducer } from "react";
import { categoryReducer } from "./CategoryReducer";


const CategoryContext = createContext();



// children props are what is surrounded by the provider in App.js
export const CategoryProvider = ({ children }) => {

    //initialize products as an empty array and loading as true
    const initalState = {
        categories: [],
        loading: false,
        categoryId: "",
        category: {}
    }
    //call useReducer and passin the categoryReducer and inital state
    const [state, categoryDispatch] = useReducer(categoryReducer, initalState);

   



    return <CategoryContext.Provider value={{...state, categoryDispatch}}>
        {children}
        </CategoryContext.Provider>

}

export default CategoryContext;