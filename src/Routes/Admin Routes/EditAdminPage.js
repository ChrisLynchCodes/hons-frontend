import { React, useEffect, useContext } from 'react'
import { EditAdminForm } from '../../Components/Admins/EditAdminForm'
import { GetAdmin } from '../../Context/Admin/AdminActions'
import { useLocation } from "react-router-dom";
import AdminContext from "../../Context/Admin/AdminContext";
import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie";

export const EditAdminPage = () => {

  const { admin, adminDispatch } = useContext(AdminContext);
  const location = useLocation();
  const { from } = location.state;
  const [cookies] = useCookies();

  useEffect(() => {

    const getAdmin = async () => {


      if (from !== "") {

        adminDispatch({ type: 'SET_LOADING' })
        const admin = await GetAdmin(from, cookies.token);
        adminDispatch({ type: 'GET_ADMIN', payload: admin })

      }

    }
    getAdmin()




  }, [from, adminDispatch, cookies.token])

  return (

    <div className='grid grid-cols-1 gap-8 xl:grid-cols-3 pt-5'>

      <div>
        <Link className="btn btn-outline btn-lg" to='/admindashboard'>
          Cancel
        </Link>
      </div>

      <EditAdminForm admin={admin} />


    </div>
  )
}
