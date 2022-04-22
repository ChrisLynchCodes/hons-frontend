
import { EditProductForm } from './EditProductForm';
import { Link } from 'react-router-dom';
import { React, useEffect, useContext } from 'react'
import CategoryContext from "../../Context/Category/CategoryContext";
import { GetCategories } from "../../Context/Category/CategoryActions";
import ProductContext from '../../Context/Product/ProductContext';
import { GetProduct } from '../../Context/Product/ProductActions'
import { Spinner } from '../Layout/Spinner';
import { useLocation } from "react-router-dom";



export const EditProduct = () => {



    const { categories, categoryDispatch } = useContext(CategoryContext);
    const { product,  loading, productDispatch } = useContext(ProductContext)
    const location = useLocation();
    const { from } = location.state;

  
   
    useEffect(() => {
        // productDispatch({ type: 'SET_LOADING' })
        // productDispatch({ type: 'GET_PRODUCT_ID', payload: prodId })
        productDispatch({ type: 'SET_LOADING' })

        const getProductAndCategory = async () => {


            if (from !== "") {

                productDispatch({ type: 'SET_LOADING' })
                const product = await GetProduct(from)
                productDispatch({ type: 'GET_PRODUCT', payload: product })
               
                categoryDispatch({ type: 'SET_LOADING' })
                const categories = await GetCategories();
                categoryDispatch({ type: 'GET_CATEGORIES', payload: categories })


            }

        }
        getProductAndCategory()


    }, [productDispatch, from, categoryDispatch])





    if (loading) {
        return <Spinner />
    }
    else {
        return (


            <div className='grid grid-cols-1 gap-8 xl:grid-cols-3 md:grid-cols-2 pt-5'>



                <img src={product.imageLink} className="mask mask-squircle" alt="product link" />
               <EditProductForm product={product} categories={categories}/>


                <div>

                    <Link className="btn btn-outline btn-lg" to='/productlist'>
                        Cancel
                    </Link>

                </div>


            </div>



        )
    }
}

