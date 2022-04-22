import React from 'react'
import { CreateAddressForm } from '../../Components/Addresses/CreateAddressForm'
import { Link } from "react-router-dom";
export const CreateAddressPage = () => {
 
 
  return (

    <div className='grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3 mt-10'>
      <div><Link className="btn btn-outline btn-lg" to='/customeraddreslist'>Go back</Link></div>
       <CreateAddressForm />
       
      </div>
 
  )
}
