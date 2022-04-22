import React from 'react';
import { Link } from "react-router-dom";
import { FaBoxes, FaUsers, FaCampground, FaAddressCard, FaTags } from 'react-icons/fa'

export const AdminSidebar = ({ role }) => {
    return (

        <>
            <ul className="hidden md:block menu w-64  bg-base-100 rounded-box">

                <li className='hover-bordered'>

                    <Link to='/productlist' className='link link-hover'>
                        <FaCampground className='pr-1' /> Products
                    </Link>

                </li>
                <li className='hover-bordered'>
                    <Link to='/categoryList' className='link link-hover'>
                        <FaTags className='pr-1' />
                        Categories
                    </Link>
                </li>
                <li className='hover-bordered'>
                    <Link to='/customerlist' className='link link-hover'>
                        <FaUsers className='pr-1' />
                        Customers
                    </Link>
                </li>
                <li className='hover-bordered'>
                    <Link to='/orderlist' className='link link-hover'>
                        <FaBoxes className='pr-1' />
                        Orders
                    </Link>
                </li>
                {role === 'SuperAdmin' ? <li className='hover-bordered'>
                    <Link to='/adminlist' className='link link-hover'>
                        <FaAddressCard className='pr-1' />
                        Admins
                    </Link>
                </li> : <li></li>
                }
            </ul>

        </>
    );
};
