import { React, useEffect, useContext } from 'react';
import { Spinner } from "../Layout/Spinner";
import CategoryContext from "../../Context/Category/CategoryContext";
import { CategoryItem } from "../../Components/Categories/CategoryItem";
import { GetCategories } from "../../Context/Category/CategoryActions";
import ProductContext from '../../Context/Product/ProductContext';
import { ProductItem } from "../../Components/Products/ProductItem";
import { GetNProducts } from '../../Context/Product/ProductActions';


export const Home = () => {

  const { products, loading, productDispatch } = useContext(ProductContext)
  const { categories, categoryDispatch } = useContext(CategoryContext)




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

    productDispatch({ type: 'SET_LOADING' })

    const getProducts = async () => {
      const numberOfProducts = 4;
      const products = await GetNProducts(numberOfProducts)
      productDispatch({ type: 'GET_PRODUCTS', payload: products })
     
    }
    getProducts()




  }, [productDispatch, categoryDispatch  ]) 




  if (!loading) {

    return (
        
      <>
     
     
        <div className='grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3'>
          {
            categories.slice(0, 6).map((category) =>
            (


              <CategoryItem key={category.id} category={category} />

            ))
          }
        </div>

        <h1 className='text-center mx-auto pt-4 font-extralight  text-6xl text-secondary'>Free shipping on all orders!</h1>
        
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {
            products.map((product) => (<ProductItem key={product.id} product={product} />
            ))
          }
        </div>
      </>

    );


  } else {
  
    return <Spinner />
  }


};

