import { React, useEffect, useContext } from 'react'
import { useLocation } from "react-router-dom";
import { GetCustomer } from "../../Context/Customer/CustomerActions";
import CustomerContext from "../../Context/Customer/CustomerContext"
import { useCookies } from "react-cookie";
import { RemoveCustomer } from "../../Components/Customers/RemoveCustomer";



export const RemoveCustomerPage = () => {

  const [cookies] = useCookies();
  const location = useLocation();
  const { from } = location.state;
  const { customer,  customerDispatch } = useContext(CustomerContext)
const customerId = from;

  useEffect(() => {


    customerDispatch({ type: 'SET_LOADING' })

    const getCustomer = async () => {

      if (customerId !== "") {

        customerDispatch({ type: 'SET_LOADING' })
        const customer = await GetCustomer(customerId, cookies.token)
        customerDispatch({ type: 'GET_CUSTOMER', payload: customer })
      
      }

    }
    getCustomer()



  }, [customerDispatch, customerId, cookies.token])
  return (
    <RemoveCustomer customer={customer} />
  )
}
