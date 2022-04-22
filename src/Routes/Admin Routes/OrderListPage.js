import React from 'react';
import { OrderTable } from '../../Components/Orders/OrderTable';
import { Link } from 'react-router-dom'

export const OrderListPage = () => {


  return (
    <>

<h1 className='text-center mx-auto pt-4 font-extralight  text-6xl text-primary'>Update order status view order</h1>
      <OrderTable />
      <br />
      <br />
      <br />

     

      <Link className="btn btn-outline btn-lg" to='/admindashboard'>Go back</Link>
    </>
  );
};
