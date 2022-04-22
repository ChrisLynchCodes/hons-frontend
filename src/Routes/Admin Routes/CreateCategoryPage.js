import React from 'react'
import { CreateCategoryForm } from '../../Components/Categories/CreateCategoryForm'
import {Link} from  'react-router-dom'


export const CreateCategoryPage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 pt-10 gap-2 '>
      <div>  <Link className="btn btn-outline btn-lg" to='/categorylist'>Go back</Link></div>
      <CreateCategoryForm />
    
    </div>
  )
}
