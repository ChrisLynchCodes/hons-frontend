import {React, useContext, useEffect, useState} from 'react';
import OrderContext from '../../Context/Order/OrderContext';
import { GetOrders } from '../../Context/Order/OrderActions';
import { useCookies } from "react-cookie";
import { Spinner } from '../Layout/Spinner';
export const OrderStat = () => {

  const {orders, loading, orderDispatch} = useContext(OrderContext)
  const [cookies] = useCookies();
  const [pendingOrders, setPendingOrders] = useState(0);
  const [dispatchedOrders, setDispatchedOrders] = useState(0);
  const [completeOrders, setCompleteOrders] = useState(0);
  useEffect(()=>{

    const getOrders = async ()=>{
      const orders =await GetOrders(cookies.token)
      orderDispatch({type: "GET_ORDERS", payload: orders})
     const pendingOrders = orders.filter(order => order.status === "Pending")
     const dispatchedOrders = orders.filter(order => order.status === "Dispatched")
     const completeOrders = orders.filter(order => order.status === "Complete")
     setPendingOrders(pendingOrders.length)
     setCompleteOrders(completeOrders.length)
     setDispatchedOrders(dispatchedOrders.length)
    }
getOrders()

  },[orderDispatch, cookies])
if(!loading){
  return (

    <>
    
    <div className="stats stats-vertical shadow">

        <div className="stat">
          <div className="stat-title">Pending orders</div>
          <div className="stat-value text-primary">{pendingOrders}</div>
        
        </div>

        <div className="stat">
          <div className="stat-title">Dispatched orders</div>
          <div className="stat-value text-secondary">{dispatchedOrders}</div>
    
        </div>

        <div className="stat">
          <div className="stat-title">Complete orders</div>
          <div className="stat-value text-success">{completeOrders}</div>
   
        </div>

      </div></>
  
  
  );
}else{return(<Spinner/>)}
   
};
