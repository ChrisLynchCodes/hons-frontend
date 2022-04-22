import { React, useEffect, useContext, useState } from 'react'
import { EditCustomerForm } from '../../Components/Customers/EditCustomerForm'
import { GetCustomer } from '../../Context/Customer/CustomerActions'
import { useLocation } from "react-router-dom";
import CustomerContext from "../../Context/Customer/CustomerContext";
import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie";
import { getRole } from '../PrivateRoute'
export const EditCustomerPage = () => {

  const { customer, customerDispatch } = useContext(CustomerContext);
  const location = useLocation();
  const { from } = location.state;
  const [cookies] = useCookies();
  const [role, setRole] = useState("")


  useEffect(() => {


    const getCustomer = async () => {


      if (from !== "") {

        customerDispatch({ type: 'SET_LOADING' })
        const customer = await GetCustomer(from, cookies.token);
        customerDispatch({ type: 'GET_CUSTOMER', payload: customer })
        customerDispatch({ type: 'SET_LOADING' })
        setRole(getRole(cookies))
      }

    }
    getCustomer()




  }, [from, customerDispatch, cookies])

  return (

    <div className='grid grid-cols-1 gap-8 xl:grid-cols-3 pt-5'>

      <EditCustomerForm customer={customer} />

      {
        role === 'Admin' || role === 'SuperAdmin' ? <Link className="btn btn-outline btn-lg" to='/customerlist'>
          Cancel
        </Link> : <Link className="btn btn-outline btn-lg" to='/account'>
          Cancel
        </Link>
      }






    </div>
  )
}
