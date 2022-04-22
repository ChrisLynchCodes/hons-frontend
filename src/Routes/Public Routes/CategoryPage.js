import {React, useEffect, useContext} from 'react';
import { useLocation } from "react-router-dom";
import ProductContext from '../../Context/Product/ProductContext';
import { GetProductsByCategory } from '../../Context/Product/ProductActions';
import { ProductItem } from '../../Components/Products/ProductItem';
import {  Spinner } from "../../Components/Layout/Spinner";


export const CategoryPage = () => {

  const location = useLocation();
  const id = location.state.id;
  const categoryName = location.state.categoryName;





  const { products, loading, productDispatch } = useContext(ProductContext)


  useEffect(()=>{


    productDispatch({ type: 'SET_LOADING' })

    const getProducts = async () => {
  
      const products = await GetProductsByCategory(id)
      productDispatch({ type: 'GET_PRODUCTS', payload: products })
     
    }
    getProducts()


  }, [productDispatch, id])

if(!loading)
{
  return(
 
     
    <>
    <h1 className='text-center mx-auto pt-4 font-extralight  text-6xl text-primary'>{categoryName}</h1>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {
          products.map((product) => (<ProductItem key={product.id} product={product} />
          ))
        }
      </div>
    </>
)
}
 else{
    return(<Spinner />)
  }
};
