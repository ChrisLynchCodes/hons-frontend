import React from 'react'
import { CustomerTable } from '../../Components/Customers/CustomerTable'
import { Link } from 'react-router-dom'
export const CustomerListPage = () => {
    return (

        <>
            <CustomerTable />
            <br />
            <br />
            <br />
            <Link to='/createcustomer' style={{ "float": "right" }} className='btn btn-accent btn-sm rounded-btn'>Add New Customer</Link>
            <Link className="btn btn-outline btn-lg" to='/admindashboard'>Go back</Link>
        </>

    )
}
