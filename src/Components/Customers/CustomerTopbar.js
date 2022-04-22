import React from 'react';
import { Link } from "react-router-dom";
// import { FaBoxes, FaUsers, FaCampground, FaAddressCard, FaTags } from 'react-icons/fa'

export const CustomerTopbar = ({ customer }) => {
    return (

        <div className='tabs  md:hidden'>



      

                <Link to='/customeraddreslist' className='tab tab-bordered link link-hover bg-primary link-secondary'>

                    Addresses
                </Link>

                <Link to='/customerorders' className='tab tab-bordered link link-hover bg-primary link-secondary'>

                    Orders
                </Link>
                <Link to='/customerRemoveAccount' state={{ from: customer.id }} className='tab tab-bordered link link-hover bg-primary link-secondary'>

                    Delete Account
                </Link>


         


 




        </div >
    );
};
