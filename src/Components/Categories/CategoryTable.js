import { React, useEffect, useContext, useState } from 'react';
import { Spinner } from "../Layout/Spinner";
import CategoryContext from '../../Context/Category/CategoryContext';
import { GetCategories } from '../../Context/Category/CategoryActions';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';


export const CategoryTable = () => {



  const { categories,loading, categoryDispatch } = useContext(CategoryContext)


  let categoryCount = 0;


  useEffect(() => {


    categoryDispatch({ type: 'SET_LOADING' })

    const getCategories = async () => {
      const categories = await GetCategories()
      categoryDispatch({ type: 'GET_CATEGORIES', payload: categories })
    }
    getCategories();

   



  }, [ categoryDispatch])




  if (!loading) {


    return (
      <div className="overflow-x-auto">
        <table className="table w-full table-compact">
          <thead>
            <tr>
              <th></th>
              <th>Category</th>
              <th>Created At</th>
              <th>Updated At</th>
            




            </tr>
          </thead>
          <tbody>

            {

              categories.map((category) => (
                <tr className='hover' key={category.id}>
                  <th>{categoryCount += 1}</th>
              
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={category.thumbnail} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{category.categoryName}</div>

                      </div>
                    </div>
                  </td>
                  <td>{category.createdAt.substring(0, 10)} ~ {category.createdAt.substring(11, 16)}</td>
                  <td>{category.updatedAt.substring(0, 10)} ~ {category.updatedAt.substring(11, 16)}</td>

               
            


                  <td>
                    <Link to='/editcategory' state={{ from: category.id }} className='btn btn-ghost btn-sm rounded-btn'>
                      <FaEdit style={{ "color": "grey" }} />
                    </Link>
                  </td>

                  <td>
                    <Link to='/removecategory' state={{ from: category.id }} className='btn btn-ghost btn-sm rounded-btn'>
                      <FaRegTrashAlt style={{ "color": "red" }} />
                    </Link>
                  </td>



                </tr>

              ))
            }


          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Category</th>
              <th>Created At</th>
              <th>Updated At</th>
        

            </tr>
          </tfoot>
        </table>
      </div >
    )

  }
  else {
    return <Spinner />
  }

};
