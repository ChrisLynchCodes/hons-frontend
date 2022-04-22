import { React, useEffect, useContext, useState } from 'react';
import OrderContext from "../../Context/Order/OrderContext";
import BasketContext from "../../Context/Basket/BasketContext";
import OrderLineContext from "../../Context/OrderLine/OrderLineContext";
import { GetLatestOrder } from '../../Context/Order/OrderActions';
import { GetBasketByCustomerId, EditBasket } from '../../Context/Basket/BasketActions';
import { Spinner } from '../../Components/Layout/Spinner';
import { useCookies } from "react-cookie";
import { GetOrderLines } from '../../Context/OrderLine/OrderLineActions';
import { OrderLine } from '../../Components/Orders/OrderLine';
import ProductContext from "../../Context/Product/ProductContext"
import { GetManyProductsById } from "../../Context/Product/ProductActions";
import { TiTick } from 'react-icons/ti'
import { Link } from 'react-router-dom';

export const CheckoutSuccessPage = () => {

  const { order, orderDispatch } = useContext(OrderContext);
  const { orderLines, orderLineDispatch } = useContext(OrderLineContext);
  const { basket, basketDispatch } = useContext(BasketContext);
  const [cookies] = useCookies();
  const { products, loading, productDispatch } = useContext(ProductContext);


  useEffect(() => {
    const clearBasket = async () => {
      productDispatch({ type: 'SET_LOADING' })

      const oldBasket = await GetBasketByCustomerId(cookies.id)
      oldBasket.basketProducts = []
      //PUT updated basket
      await EditBasket(oldBasket)
      const newBasket = await GetBasketByCustomerId(cookies.id)
      basketDispatch({ type: 'GET_BASKET', payload: newBasket })

    }
    clearBasket();

  }, [basketDispatch, productDispatch, cookies.id])


  useEffect(() => {

    const getOrder = async () => {

      const id = cookies.id
      const token = cookies.token
      const order = await GetLatestOrder(id, token)


      orderDispatch({ type: 'GET_ORDER', payload: order })
      const orderLines = await GetOrderLines(order.id, token)
      orderLineDispatch({ type: 'GET_ORDERLINES', payload: orderLines })

      let productIds = [];
      orderLines.map((line) => (
        productIds.push(line.productId)
      ))


      const products = await GetManyProductsById(productIds)
      productDispatch({ type: 'GET_PRODUCTS', payload: products })

    }
    getOrder()


  }, [cookies, orderLineDispatch, productDispatch, orderDispatch])




  if (!loading) {

    return (
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3 mt-5'>

        <div></div>
        <div>
          <div>

          </div>
          <div className="card bg-primary text-primary-content">

            {order.total !== undefined && order.expectedDeliveryDate !== undefined ? <div className="card-body">
              <h2 className="card-title">Total £{order.total.toFixed(2)}</h2>
              <p>Expeted Delivery Data: {order.expectedDeliveryDate.substring(0, 10)}</p>

              <div className="card-actions justify-end">
                Order Succesfull  <TiTick    style={{ "color": "green" }} />
              </div>
            </div> : null
           }
          </div>


          {products.map((product) => (
            <OrderLine key={product.id} orderComplete={order.status} product={product} orderLines={orderLines} />

          ))}

          <Link to='/account' className='btn btn-active btn-primary'>

            My Account
          </Link>



        </div>


      </div>



    )
  } else {
    return (<Spinner />)
  }



}
