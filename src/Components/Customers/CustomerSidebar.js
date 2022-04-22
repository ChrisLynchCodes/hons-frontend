import React from 'react';
import { Link } from "react-router-dom";
import { FaBoxes, FaUsers, FaCampground, FaAddressCard, FaTags } from 'react-icons/fa'

export const CustomerSidebar = ({ customer }) => {
    return (

        <>

            <ul className="hidden md:block menu w-64  bg-base-100 rounded-box">

                <li className='hover-bordered'>

                    <Link to='/customeraddreslist' className='link link-hover'>
                        <FaCampground className='pr-1' /> My Addresses
                    </Link>

                </li>
                <li className='hover-bordered'>
                    <Link to='/customerorders' className='link link-hover'>
                        <FaTags className='pr-1' />
                        My Orders
                    </Link>
                </li>
                <li className='hover-bordered'>
                    <Link to='/customerRemoveAccount' state={{ from: customer.id }} className='link link-hover'>
                        <FaUsers className='pr-1' />
                        Delete Account
                    </Link>

                </li>





            </ul>


        </>
    );
};
