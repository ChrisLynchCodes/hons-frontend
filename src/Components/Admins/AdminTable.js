import { React, useEffect, useContext } from 'react';
import { Spinner } from "../Layout/Spinner";
import { GetAdmins } from '../../Context/Admin/AdminActions';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import AdminContext from '../../Context/Admin/AdminContext';


export const AdminTable = () => {


    const { admins, loading, adminDispatch } = useContext(AdminContext)
    const [cookies] = useCookies();
    let adminCount = 0;



    useEffect(() => {


        adminDispatch({ type: 'SET_LOADING' })

        const getAdmins = async () => {
            const admins = await GetAdmins(cookies.token)
            adminDispatch({ type: 'GET_ADMINS', payload: admins })
        }
        getAdmins();






    }, [adminDispatch, cookies.token])





    if (!loading) {


        return (
            <div className="overflow-x-auto"  >
                <table className="table w-full table-compact ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Admin</th>
                            <th>Email</th>
                            <th>Password hash</th>
                            <th>Created At</th>
                            <th>Updated At</th>



                        </tr>
                    </thead>
                    <tbody>

                        {

                            admins.map((admin) => (
                                <tr className='hover' key={admin.id}>
                                    <th>{adminCount += 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={admin.imageLink} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{admin.firstName} {admin.lastName}</div>
                                                <div className="text-sm opacity-50">{admin.role}</div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* <td>{admin.firstName} </td>
                                    <td>{admin.lastName}</td> */}
                                    <td>{admin.email}</td>
                                    <td>{admin.passwordHash}</td>
                                    <td>{admin.createdAt.substring(0, 10)} ~ {admin.createdAt.substring(11, 16)}</td>
                                    <td>{admin.updatedAt.substring(0, 10)} ~ {admin.updatedAt.substring(11, 16)}</td>




                                    <td>
                                        <Link to='/editadmin' state={{ from: admin.id }} className='btn btn-ghost btn-sm rounded-btn'>
                                            
                                        </Link>
                                    </td>

                                    <td>
                                        
                                        <Link to='/removeadmin' state={{ from: admin.id }} className='btn btn-ghost btn-sm rounded-btn'>
                                            <FaRegTrashAlt style={{"color": "red"}} />
                                        </Link>
                                    </td>



                                </tr>

                            ))
                        }


                    </tbody>
                    <tfoot>
                        <tr>

                            <th></th>
                            <th>Admin</th>
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
