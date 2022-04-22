import { React, useEffect, useContext } from 'react';
import AdminContext from "../../Context/Admin/AdminContext";
import { GetAdmin } from '../../Context/Admin/AdminActions';
import { Spinner } from '../../Components/Layout/Spinner';
import { useCookies } from "react-cookie";
import { AdminDetails } from '../../Components/Admins/AdminDetails';
import { AdminSidebar } from '../../Components/Admins/AdminSidebar';
import { OrderStat } from '../../Components/Orders/OrderStat';
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';


export const DashboardPage = () => {

  const { admin, role, loading, adminDispatch } = useContext(AdminContext);
  const [cookies] = useCookies();


  

  useEffect(() => {

    const getRole = () => {

      if (cookies.token !== undefined && cookies.token !== "undefined") {

        const token = cookies.token;

        const decoded = jwt_decode(token);

        const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        adminDispatch({ type: 'GET_ROLE', payload: role })
        

      } else
        adminDispatch({ type: 'GET_ROLE', payload: "" })

    }
    getRole();


    const getAdmin = async () => {

      const id = cookies.id
      const token = cookies.token

      const admin = await GetAdmin(id, token)

      adminDispatch({ type: 'GET_ADMIN', payload: admin })


    }
    getAdmin()

    



  }, [adminDispatch, cookies])
  if (loading) {

    return (<Spinner />)
  } else {
    return (
      <div className='grid grid-cols-1 gap-8 pt-5  md:grid-cols-2 lg:grid-cols-3 '>
        <AdminSidebar role={role} />
        <div>
        <AdminDetails admin={admin} />
        <Link to='/admineditaccount' state={{ from: admin.id }} className='btn mt-5 btn-outline btn-primary' style={{ "float": "right" }}>
            Edit details
          </Link>
          </div>
          <div>
          <OrderStat />
          </div>
         


          

        

      </div>


    );
  }

};
