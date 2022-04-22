import { React, useEffect, useContext } from 'react';
import { Spinner } from "../Layout/Spinner";
import CustomerContext from '../../Context/Customer/CustomerContext';
import { GetCustomers } from '../../Context/Customer/CustomerActions';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";


export const CustomerTable = () => {


    const { customers, loading, customerDispatch } = useContext(CustomerContext)
    const [cookies] = useCookies();
    let customerCount = 0;



    useEffect(() => {


        customerDispatch({ type: 'SET_LOADING' })

        const getCustomers = async () => {
            const customers = await GetCustomers(cookies.token)
            customerDispatch({ type: 'GET_CUSTOMERS', payload: customers })
        }
        getCustomers();






    }, [customerDispatch, cookies.token])





    if (!loading) {


        return (
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Password hash</th>
                            <th>Created At</th>
                            <th>Updated At</th>




                        </tr>
                    </thead>
                    <tbody>

                        {

                            customers.map((customer) => (
                                <tr className='hover' key={customer.id}>
                                    <th>{customerCount += 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={customer.imageLink} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{customer.firstName} {customer.lastName}</div>
                                                <div className="text-sm opacity-50">{customer.role}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{customer.email}</td>
                                    <td>{customer.passwordHash}</td>
                                    <td>{customer.createdAt.substring(0, 10)} ~ {customer.createdAt.substring(11, 16)}</td>
                                    <td>{customer.updatedAt.substring(0, 10)} ~ {customer.updatedAt.substring(11, 16)}</td>




                                    <td>
                                        <Link to='/editcustomer' state={{ from: customer.id }} className='btn btn-ghost btn-sm rounded-btn'>
                                            <FaEdit  style={{"color": "grey"}}  />
                                        </Link>
                                    </td>

                                    <td>
                                        <Link to='/removecustomer' state={{ from: customer.id }} className='btn btn-ghost btn-sm rounded-btn'>
                                            <FaRegTrashAlt  style={{"color": "red"}}  />
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
                            <th>Email</th>
                            <th>Password hash</th>
                            <th>Created At</th>
                            <th>Updated At</th>

                        </tr>
                    </tfoot>
                </table>
            </div >
        )

    }
    else {
        return <Spinner />
    }

};
