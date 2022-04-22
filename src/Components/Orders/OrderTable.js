import { React, useEffect, useContext, useState } from 'react';
import { Spinner } from "../Layout/Spinner";
import OrderContext from '../../Context/Order/OrderContext';
import { GetOrder, GetOrders, EditOrder } from '../../Context/Order/OrderActions';
import { useCookies } from "react-cookie";
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import AddressContext from '../../Context/Address/AddressContext';
import { GetAddressesByIds } from '../../Context/Address/AddressActions';
import CustomerContext from '../../Context/Customer/CustomerContext'
import { GetCustomersByIds } from '../../Context/Customer/CustomerActions'
export const OrderTable = () => {


    const { orders, orderDispatch } = useContext(OrderContext)
    const { customers, customerDispatch } = useContext(CustomerContext)
    const { addresses, loading, addressDispatch } = useContext(AddressContext);
    const [cookies] = useCookies();
    const [orderStatusStyle, setOrderStatusStyle] = useState();
    let orderCount = 0;

    useEffect(() => {


        addressDispatch({ type: 'SET_LOADING' })

        const getOrders = async () => {

            const orders = await GetOrders(cookies.token)
            orderDispatch({ type: 'GET_ORDERS', payload: orders })
            let addressIds = []
            let customerIds = []

            orders.map(order => {
                addressIds.push(order.addressId);
                customerIds.push(order.customerId)
                return orders


            })

            const customers = await GetCustomersByIds(cookies.token, customerIds)
            customerDispatch({ type: 'GET_CUSTOMERS', payload: customers })

            const addresses = await GetAddressesByIds(orders[0].customerId, cookies.token, addressIds)
            addressDispatch({ type: 'GET_ADDRESSES', payload: addresses })


        }
        getOrders();




    }, [orderDispatch, cookies, addressDispatch, customerDispatch])

    const handleChange = async(e)=>{
        
        const status = e.target.value
        const id = e.target.id
       
        const order = await GetOrder(id, cookies.token)
        
        order.status = status;

        await EditOrder(order.id, order, cookies.token)

        
    }



    if (!loading) {


        return (
            <div className="overflow-x-auto mt-5">
                <table className="table w-full table-compact">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Delivery date</th>
                            <th>First line of address</th>
                            <th>Post code</th>
                            <th>Contact</th>
                            <th>Created At</th>
                            <th>Updated At</th>




                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order) => (

                                <tr className='hover' key={order.id}>
                                   <th>{orderCount = orderCount + 1}</th>
                                    <td>
                                        {customers.map((customer) => (
                                            customer.id === order.customerId ? (customer.firstName + " " + customer.lastName) : null


                                        ))}
                                    </td>

                                    <td>£{order.total.toFixed(2)}</td>
                                    {
                                        <td>

                                            <select id={order.id} className="select select-bordered w-full max-w-xs" onChange={(e) => (handleChange(e))}>
                                                <option defaultValue={order.status}>{order.status}</option>
                                                {
                                                    order.status === "Complete" ? <><option value="Pending">Pending</option> <option value="Dispatched">Dispatched</option></>
                                                    : order.status === "Dispatched" ?  <><option value="Pending">Pending</option> <option  value="Complete">Complete</option></>
                                                    : <><option value="Complete">Complete</option> <option value="Dispatched">Dispatched</option></>
                                                }
                                               
                                            </select>
                                        </td>
                                    }
                                    {/* {
                                        order.status === "Pending" ? <td className='bg-primary'><Link to='/admineditorder' state={{ from: order.id }}>{order.status}</Link></td>
                                            : order.status === "Complete" ? <td className='bg-accent'><Link to='/admineditorder' state={{ from: order.id }}>{order.status}</Link></td>
                                                : <td className='bg-secondary'><Link to='/admineditorder' state={{ from: order.id }}>{order.status}</Link></td>
                                    } */}

                                    <td>{order.expectedDeliveryDate.substring(0, 10)}</td>
                                    <td>
                                        {addresses.map((address) => (
                                            address.id === order.addressId ? address.firstLine : null


                                        ))}
                                    </td>
                                    <td>
                                        {addresses.map((address) => (
                                            address.id === order.addressId ? address.postalCode : null


                                        ))}
                                    </td>
                                    <td>
                                        {addresses.map((address) => (
                                            address.id === order.addressId ? address.mobileNumber : null


                                        ))}
                                    </td>
                                    <td>{order.createdAt.substring(0, 10)} ~ {order.createdAt.substring(11, 16)}</td>
                                    <td>{order.updatedAt.substring(0, 10)} ~ {order.updatedAt.substring(11, 16)}</td>



                                    <td>

                                        <Link to='/admineditorder' state={{ from: order.id }} className='btn btn-ghost btn-sm rounded-btn'>
                                            <FaEdit size="25px" style={{ "color": "orange" }} /> View
                                        </Link>


                                    </td>


                                </tr>



                            ))
                        }


                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Delivery date</th>
                            <th>First line of address</th>
                            <th>Post code</th>
                            <th>Contact</th>
                            <th>Created At</th>
                            <th>Updated At</th>

                        </tr>
                    </tfoot>
                </table>
            </div>
        )

    }
    else {
        return <Spinner />
    }

};
