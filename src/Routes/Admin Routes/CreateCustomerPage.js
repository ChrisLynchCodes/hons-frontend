import React from 'react'
import { CreateCustomerForm } from '../../Components/Customers/CreateCustomerForm'
import {Link} from  'react-router-dom'
    
export const CreateCustomerPage = () => {
    return (

      

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 pt-10 gap-2 '>
        <div>  <Link className="btn btn-outline btn-lg" to='/customerlist'>Go back</Link></div>
        <CreateCustomerForm />
      </div>
     
    )
}
