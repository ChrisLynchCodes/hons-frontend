import { React, useEffect, useState } from 'react'
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { DeleteCustomer } from '../../Context/Customer/CustomerActions'
import { WarningAlert } from '../../Components/Layout/WarningAlert'
import { useNavigate } from "react-router-dom";
import { getRole } from '../../Routes/PrivateRoute';



export const RemoveCustomer = ({ customer }) => {


    const [cookies] = useCookies();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [customerId, setCustomerId] = useState("")
    const [role, setRole] = useState("")
    let navigate = useNavigate();

    
    useEffect(() => {


        setFirstName(customer.firstName)
        setLastName(customer.lastName)
        setEmail(customer.email)
        setCustomerId(customer.id);
        setRole(getRole(cookies))
    




    }, [customer, cookies])




    const handleClick = async () => {

        await DeleteCustomer(customerId, cookies.token)
        if(role === "SuperAdmin" || role === "Admin")
        {
            navigate("/customerlist", { replace: true });
        }
        else if(role === "Customer")
        {
            navigate("/logout", { replace: true });
        }
        
       
    }

    return (

        <>
            <WarningAlert text="This will be permenant" />
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3 pt-5'>

                <div>
                    {/* <img src={thumbnail} className="mask mask-squircle" alt="product link" /> */}
                </div>

                <div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">First Name</span>

                        </label>
                        <input type="text" placeholder="First name" value={firstName} className="input input-bordered w-full max-w-xs" disabled />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Last Name</span>

                        </label>
                        <textarea type="text" placeholder="Category description" value={lastName} className="input input-bordered w-full max-w-xs text-area" disabled />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <textarea type="text" placeholder="Category description" value={email} className="input input-bordered w-full max-w-xs text-area" disabled />

                    </div>
       
                </div>

                <div>
                    <div className="btn-group">
                        <h1 className='pb-3 pl-2'>Are you sure you want to remove?</h1>
                        <button onClick={() => handleClick()} className="btn btn-outline btn-lg btn-primary" >
                            Remove Customer
                        </button>

                        {
        role === 'Admin' || role === 'SuperAdmin' ? <Link className="btn btn-outline btn-lg" to='/customerlist'>
          Cancel
        </Link> : <Link className="btn btn-outline btn-lg" to='/account'>
          Cancel
        </Link>
      }
                     

                    </div>
                </div>



            </div></>

    )

}
