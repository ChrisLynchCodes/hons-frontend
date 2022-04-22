import { React, useEffect, useContext } from 'react'
import { useLocation } from "react-router-dom";
import { GetAdmin } from "../../Context/Admin/AdminActions";
import AdminContext from "../../Context/Admin/AdminContext"
import { useCookies } from "react-cookie";
import { RemoveAdmin } from "../../Components/Admins/RemoveAdmin";



export const RemoveAdminPage = () => {

  const [cookies] = useCookies();
  const location = useLocation();
  const { from } = location.state;
  const { admin, adminDispatch } = useContext(AdminContext)
const adminId = from;

  useEffect(() => {


    adminDispatch({ type: 'SET_LOADING' })

    const getAdmin = async () => {

      if (adminId !== "") {

        adminDispatch({ type: 'SET_LOADING' })
        const admin = await GetAdmin(adminId, cookies.token)
        adminDispatch({ type: 'GET_ADMIN', payload: admin })
      
      }

    }
    getAdmin()



  }, [adminDispatch, adminId, cookies.token])
  return (
    <RemoveAdmin admin={admin} />
  )
}







