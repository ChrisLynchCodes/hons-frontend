import { React, useContext, useEffect } from 'react'
import { useCookies } from "react-cookie";
import OrderContext from '../../Context/Order/OrderContext'
import { GetOrderByCustomerId } from '../../Context/Order/OrderActions'
import { Spinner } from '../../Components/Layout/Spinner';
import { CustomerOrder } from '../../Components/Orders/CustomerOrder'
import AddressContext from '../../Context/Address/AddressContext'
import { GetAddressesByIds } from "../../Context/Address/AddressActions";
import OrderLineContext from '../../Context/OrderLine/OrderLineContext';
import ProductContext from '../../Context/Product/ProductContext';
import { GetOrderLines } from "../../Context/OrderLine/OrderLineActions";
import { GetManyProductsById } from "../../Context/Product/ProductActions";




export const OrdersPage = () => {

  const [cookies] = useCookies();
  const { orders, orderDispatch } = useContext(OrderContext);
  const { addresses, loading, addressDispatch } = useContext(AddressContext);
  const { orderLines, orderLineDispatch } = useContext(OrderLineContext);
  const { products, productDispatch } = useContext(ProductContext);


  useEffect(() => {
    addressDispatch({ type: 'SET_LOADING' })

    const getOrders = async () => {
      const orders = await GetOrderByCustomerId(cookies.id, cookies.token);
      orderDispatch({ type: 'GET_ORDERS', payload: orders })

      let addressIds = []
      orders.map((order) => (
        addressIds.push(order.addressId)
      ))

      const addresses = await GetAddressesByIds(cookies.id, cookies.token, addressIds)
      addressDispatch({ type: 'GET_ADDRESSES', payload: addresses })


   }

    getOrders();


  }, [orderDispatch, cookies, addressDispatch])




  if (!loading) {
    return (

      <>
        <h1 className='text-4xl mb-5'>Your Orders</h1>
        <div className='grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3 pt-5'>


          {orders.map((order) => (
            addresses.map((address) => (
              address.id === order.addressId ? <CustomerOrder key={order.id} order={order} address={address} products={products} /> : null
            ))

          ))

          }


        </div>

      </>


    )
  } else {
    return <Spinner />
  }

}
