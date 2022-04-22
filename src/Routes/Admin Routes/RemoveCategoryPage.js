import { React, useEffect, useContext, useState } from 'react'
import { useLocation } from "react-router-dom";
import ProductContext from '../../Context/Product/ProductContext';
import CategoryContext from '../../Context/Category/CategoryContext';
import { GetProductsByCategory } from '../../Context/Product/ProductActions'
import { GetCategory } from '../../Context/Category/CategoryActions'


import { Link } from "react-router-dom";
import { BiError } from 'react-icons/bi'
import { RemoveCategory } from '../../Components/Categories/RemoveCategory'

export const RemoveCategoryPage = () => {


  const location = useLocation();
  const { from } = location.state;
  const { category, categoryDispatch } = useContext(CategoryContext)
  const { products,  productDispatch } = useContext(ProductContext)


  const [categoryName, setCategoryName] = useState("")
  const catId = from;



  useEffect(() => {

    categoryDispatch({ type: 'SET_LOADING' })

    const getCategory = async () => {

      if (catId !== "") {

        categoryDispatch({ type: 'SET_LOADING' })
        const category = await GetCategory(catId)
        categoryDispatch({ type: 'GET_CATEGORY', payload: category })
        setCategoryName(category.categoryName)
      }

    }
    getCategory()

    const getProducts = async () => {

      if (catId !== "") {

        productDispatch({ type: 'SET_LOADING' })
        const products = await GetProductsByCategory(catId)
        productDispatch({ type: 'GET_PRODUCTS', payload: products })

      }

    }
    getProducts()

  }, [productDispatch, categoryDispatch, catId])








  if (products.length === 0) {

    return (

      <RemoveCategory category={category} />
    )

  } else {


    return (


      < div className='grid grid-cols-1 gap-8 md:grid-cols-3 pt-5'>
        <div>
          <div className="tooltip tooltip-right" data-tip="You can move products in and out of categories via the dashboard">
            <Link className="btn btn-outline btn-lg" to='/categorylist'>
              Go back
            </Link>
          </div>
        </div>
        <div>
          <h1 className='text-2xl'>The <span className='text-primary'>{categoryName}</span> category contains <span className='text-accent'>{products.length}</span> products. Before proceeding please remove them from the <span className='text-primary'>{categoryName}</span> category.</h1>
        </div>
        <div className="tooltip tooltip-botom" data-tip="You can move products in and out of categories via the dashboard">
          <Link to='/categorylist'>
            <BiError size={200} color="red" />
          </Link>
        </div>

      </div>
    

    )
  }
}
