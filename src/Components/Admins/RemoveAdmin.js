import { React, useEffect,  useState } from 'react'
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { DeleteAdmin } from '../../Context/Admin/AdminActions'
import { WarningAlert } from '../../Components/Layout/WarningAlert'
import { useNavigate } from "react-router-dom";



export const RemoveAdmin = ({ admin }) => {


    const [cookies] = useCookies();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [adminId, setAdminId] = useState("")
    let navigate = useNavigate();

    
    useEffect(() => {


        setFirstName(admin.firstName)
        setLastName(admin.lastName)
        setEmail(admin.email)
        setAdminId(admin.id);
    




    }, [admin])




    const handleClick = async () => {

        await DeleteAdmin(adminId, cookies.token)
        navigate("/adminlist", { replace: true });
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
                        <h1 className='pb-3 pl-2'>Are you sure you want to remove the following admin?</h1>
                        <button onClick={() => handleClick()} className="btn btn-outline btn-lg btn-primary" >
                            Remove Admin
                        </button>

                        <Link className="btn btn-outline btn-lg" to='/adminlist'>
                            Cancel
                        </Link>


                    </div>
                </div>



            </div></>

    )

}
