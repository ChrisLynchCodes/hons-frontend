import { React, useEffect, useContext } from 'react'
import { EditCategoryForm } from '../../Components/Categories/EditCategoriesForm'
import { GetCategory } from '../../Context/Category/CategoryActions'
import { useLocation } from "react-router-dom";
import CategoryContext from "../../Context/Category/CategoryContext";
import {Link} from 'react-router-dom'

export const EditCategoryPage = () => {

  const { category, categoryDispatch } = useContext(CategoryContext);
  const location = useLocation();
  const { from } = location.state;


  useEffect(() => {

    const getCategory = async () => {


      if (from !== "") {
       
        categoryDispatch({ type: 'SET_LOADING' })
        const category = await GetCategory(from);
        categoryDispatch({ type: 'GET_CATEGORY', payload: category })

      }

    }
    getCategory()




  }, [from, categoryDispatch])

  return (

    <div className='grid grid-cols-1 gap-8 xl:grid-cols-3 pt-5'>
     <img src={category.thumbnail} className="mask mask-squircle" alt="product link" />
      <EditCategoryForm category={category} />
      <Link className="btn btn-outline btn-lg" to='/categorylist'>
        Cancel
      </Link>



    </div>
  )
}
