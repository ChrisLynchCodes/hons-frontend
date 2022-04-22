import React from 'react'
import {AddressTable} from "../../Components/Addresses/AddressTable";
import { Link } from "react-router-dom";

export const AddressPage = () => {


  return (
    <>
    <AddressTable />
    <br />
    <br />
    <br />
    <Link to='/customercreateaddress' style={{ "float": "right" }} className='btn btn-accent btn-sm rounded-btn'>Add New Address</Link>
    
    {/* //Change this depending on the role to go Account or Dashboard */}
    <Link className="btn btn-outline btn-lg" to='/account'>Go back</Link>
</>
  )
}
