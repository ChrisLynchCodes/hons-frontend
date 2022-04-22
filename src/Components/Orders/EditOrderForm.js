import { React, useContext, useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import OrderContext from '../../Context/Order/OrderContext';
import { GetOrder } from "../../Context/Order/OrderActions";
import { Spinner } from '../Layout/Spinner';
import { useCookies } from "react-cookie";
import OrderLineContext from '../../Context/OrderLine/OrderLineContext'
import { GetOrderLines } from '../../Context/OrderLine/OrderLineActions'
import AddressContext from "../../Context/Address/AddressContext";
import { GetAddress } from '../../Context/Address/AddressActions'
import ProductContext from '../../Context/Product/ProductContext'
import { GetManyProductsById } from "../../Context/Product/ProductActions";




//TODO make sure badges match colouings









export const EditOrderForm = () => {


    const { order, orderDispatch } = useContext(OrderContext);
    const { orderLines, orderLineDispatch } = useContext(OrderLineContext);
    const { address, addressDispatch } = useContext(AddressContext);
    const { products, loading, productDispatch } = useContext(ProductContext);
    const [cookies] = useCookies();
    const location = useLocation();
    const { from } = location.state;



        useEffect(() => {
            productDispatch({ type: "SET_LOADING" })

            const getOrder = async () => {
                const order = await GetOrder(from, cookies.token)
                orderDispatch({ type: "GET_ORDER", payload: order })

                const orderLines = await GetOrderLines(order.id, cookies.token)
                orderLineDispatch({ type: "GET_ORDERLINES", payload: orderLines })
                const address = await GetAddress(order.customerId, cookies.token, order.addressId)
                addressDispatch({ type: "GET_ADDRESS", payload: address })


                let productIds = [];
                orderLines.forEach(line => productIds.push(line.productId));
                const products = await GetManyProductsById(productIds, cookies.token)
                productDispatch({ type: 'GET_PRODUCTS', payload: products })
            }
            getOrder()



        }, [orderDispatch, from, cookies, orderLineDispatch, addressDispatch, productDispatch])



    if (!loading) {
        return (

            <div className='grid grid-cols-1 gap-8 md:grid-cols-3 pt-5'>






                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title border-b border-rose-500">Address</h2>
                        <label className='font-bold text-primary'>First line</label>
                        <h3>{address.firstLine}</h3>
                        <label className='font-bold text-primary'>Second line</label>
                        <h3>{address.secondLine}</h3>
                        <label className='font-bold text-primary'>Post code</label>
                        <h3>{address.postalCode}</h3>
                        <label className='font-bold text-primary'>City</label>
                        <h3>{address.city}</h3>
                        <label className='font-bold text-primary'>Mobile number</label>
                        <h3>{address.mobileNumber}</h3>
                        <label className='font-bold text-primary'>Phone number</label>
                        <h3>{address.phoneNumber}</h3>
                        <label className='font-bold text-primary'>Country</label>
                        <h3>{address.country}</h3>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title border-b border-rose-500">Order</h2>
                        <label className='font-bold text-primary'>Total</label>
                        {
                            order.total !== undefined ? <h3>£{order.total.toFixed(2)}</h3> : 0
                        }

                        <label className='font-bold text-primary'>Status</label>
                        <h3>{order.status}</h3>

                        <label className='font-bold text-primary'>Expected delivery date</label>

                        {
                            order.expectedDeliveryDate !== undefined ? <h3>{order.expectedDeliveryDate.substring(0, 10)}</h3> : null
                        }

                        <label className='font-bold text-primary'>Created</label>
                        {
                            order.createdAt !== undefined ? <h3>{order.createdAt.substring(0, 10)} - {order.createdAt.substring(11, 16)}</h3> : null
                        }


                    </div>
                </div>

                <div>

                    {
                        products.map((product) => (

                            <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <div className=' mb-5'>
                                        <h2 className="card-title border-b border-rose-500">Product</h2>
                                        <label className="font-bold label"><span className="label-text  text-primary">Product name</span></label>
                                        <h3>{product.productName}</h3>
                                        <label className="font-bold label"><span className="label-text  text-primary">Price</span></label>
                                        <h3>£{product.price.toFixed(2)}</h3>
                                        <label className="font-bold label"><span className="label-text  text-primary">Quantity</span></label>
                                        {orderLines.map((line) => (
                                            line.productId === product.id ? <h3 key={line.id}>{line.quantity}</h3> : null
                                        ))}

                                    </div>
                                </div>




                            </div>

                        ))
                    }
                </div>




            </div>

        )
    } else {
        return (<Spinner />)

    }

}
