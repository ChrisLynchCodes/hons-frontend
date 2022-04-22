import { React, useEffect, useContext } from 'react';
import CustomerContext from "../../Context/Customer/CustomerContext";
import { GetCustomer } from '../../Context/Customer/CustomerActions';
import { Spinner } from '../../Components/Layout/Spinner';
import { useCookies } from "react-cookie";
import { AccountDetails } from '../../Components/Customers/AccountDetails';
import jwt_decode from "jwt-decode";
import { CustomerSidebar } from '../../Components/Customers/CustomerSidebar';
import { Link } from 'react-router-dom'
import { CustomerTopbar } from '../../Components/Customers/CustomerTopbar'



export const CustomerAccountPage = () => {

  const { customer, loading, customerDispatch } = useContext(CustomerContext);
  
  const [cookies] = useCookies();

  useEffect(() => {

    const getRole = () => {

      if (cookies.token !== undefined && cookies.token !== "undefined") {
        const token = cookies.token;

        const decoded = jwt_decode(token);

        const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        customerDispatch({ type: 'GET_ROLE', payload: role })


      } else
        customerDispatch({ type: 'GET_ROLE', payload: "" })

    }
    getRole();


    const getCustomer = async () => {

      const id = cookies.id
      const token = cookies.token

      const customer = await GetCustomer(id, token)

      customerDispatch({ type: 'GET_CUSTOMER', payload: customer })


    }
    getCustomer()


  }, [customerDispatch, cookies])


  if (loading) {

    return (<Spinner />)
  } else {
    return (
      <>
        <div className='grid grid-cols-1 gap-8 pt-5  md:grid-cols-3  '>
          <div className='sm:hidden md:block'>
            <CustomerSidebar customer={customer} />
          </div>
          <div>
            <CustomerTopbar customer={customer} />
            <AccountDetails customer={customer} />
            <br />
            <Link to='/customereditaccount' state={{ from: customer.id }} className='btn btn-outline btn-primary' style={{ "float": "right" }}>
              Edit details
            </Link>
          </div>


        </div>

      </>


    );
  }

};



