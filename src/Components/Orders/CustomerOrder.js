import { React, useContext, useEffect } from 'react'

import { Spinner } from '../Layout/Spinner';
import { useCookies } from "react-cookie";
import { GetOrderLines } from "../../Context/OrderLine/OrderLineActions";
import OrderLineContext from '../../Context/OrderLine/OrderLineContext';

//TODO show products in order and quantity - basicly same info as editorderform

export const CustomerOrder = ({ order, address }) => {


  const { orderLines, orderLineDispatch } = useContext(OrderLineContext);

  useEffect(() => {

    const getOrderLines = async () => {
      const orderLines = await GetOrderLines(order.id)
      orderLineDispatch({ type: "GET_ORDERLINES", payload: orderLines })

    }
    getOrderLines()

  }, [orderLineDispatch, order.id])


  return (
    <div className='mb-5'>

      <div className="card  bg-primary text-primary-content">





        <div className="card-body">
          <h2 className="card-title">
            Status - {order.status === "Pending" ? <div className="badge"> {order.status}  </div>
              : order.status === "Dispatched" ? <div className="badge badge-secondary"> {order.status}  </div>
                : <div className="badge badge-accent">{order.status}</div>}

          </h2>
          <h3>Expected delivery date: {order.expectedDeliveryDate.substring(0, 10)}</h3>
          <h3>Total: £{order.total.toFixed(2)}</h3>
          <h2 className='underline font-bold '>Address:</h2>
          <h3>firstLine: {address.firstLine}</h3>
          <h3>secondLine: {address.secondLine}</h3>
          <h3>city: {address.city}</h3>
          <h3>postalcode: {address.postalCode}</h3>
          <h3>mobileNumber: {address.mobileNumber}</h3>
          <h3>phoneNumber: {address.phoneNumber}</h3>
          <h3>country: {address.country}</h3>
  
          <div className="card-actions justify-end">


          </div>
        </div>

      </div>


    </div>
  )



}
