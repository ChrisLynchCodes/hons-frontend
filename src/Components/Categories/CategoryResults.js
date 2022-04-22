import { React, useEffect, useContext } from 'react';
import { Spinner } from "../Layout/Spinner";
import { CategoryItem } from "./CategoryItem";
import  CategoryContext from "../../Context/Category/CategoryContext";
import { GetCategories } from '../../Context/Category/CategoryActions';

export const CategoryResults = () => {

   const {categories, loading, categoryDispatch} = useContext(CategoryContext)

    useEffect(() => {

       //set loading
    categoryDispatch({ type: 'SET_LOADING' })

    //define getCategories
    const getCategories = async () => {

      const categories = await GetCategories()
      categoryDispatch({ type: 'GET_CATEGORIES', payload: categories })
     
    }
    //call getCategories
    getCategories()

    }, [categoryDispatch]) 

  

    if(!loading)
    {
        return (

        
            <div className='grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3 mt-5'>
                {
                    categories.map((category) =>
                    (
                        
                        
                        <CategoryItem key={category.id} category={category}/>
                        
                    ))
                }
            </div>
    
        );
    }else{
       return <Spinner />
    }

   

};
