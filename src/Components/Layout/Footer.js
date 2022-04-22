import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import AdminContext from "../../Context/Admin/AdminContext";
import UWSSurvivalGearLogo from '../../images/UWS Survival Gear.png'
import { BsTreeFill } from "react-icons/bs";
import { FaMountain } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
export const Footer = () => {

  const { role, adminDispatch } = useContext(AdminContext)
  const [cookies] = useCookies();
  
  useEffect(() => {


    if (cookies.token !== undefined && cookies.token !== "undefined") {

      const token = cookies.token;

      const decoded = jwt_decode(token);

      const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]

      adminDispatch({ type: 'GET_ROLE', payload: role })

    } else
      adminDispatch({ type: 'GET_ROLE', payload: "" })



  }, [adminDispatch, cookies.token])




  return (
    <footer className="p-10 footer bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Services</span>
        <Link to='/products' className='link link-hover'>
          Products
        </Link>
        <Link to='/allcategories' className='link link-hover'>
          Categories
        </Link>
        <Link to='/faq' className='link link-hover'>
          FAQ
        </Link>

      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to='/about' className='link link-hover'>
          About
        </Link>
        <Link to='/contact' className='link link-hover'>
          Contact
        </Link>
        <div className="hidden md:flex items-center space-x-3 ">
          {
            role === 'SuperAdmin' || role === 'Admin' || role === 'Customer' ? <div></div>
              : <Link to='/adminlogin' className='link link-hover'>
                Staff
              </Link>

          }

        </div>


      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to='/termsofuse' className='link link-hover'>
          Terms of use
        </Link>
        <Link to='/privacypolicy' className='link link-hover'>
          Privacy policy
        </Link>
        <Link to='/cookiepolicy' className='link link-hover'>
          Cookie policy
        </Link>
      </div>
      <div>
        {/* <!-- Website Logo --> */}
        <Link to='/'>
          
        <BsTreeFill style={{"color": "green"}} className='text-3xl inline' />
        <FaMountain style={{"color": "grey"}} className='text-3xl inline' />
        <BsTreeFill style={{"color": "green"}} className='text-3xl inline' />
        <FaMountain style={{"color": "grey"}} className='text-3xl inline' />
        <BsTreeFill style={{"color": "green"}} className='text-3xl inline' />
        <h3 className='mx-auto   text-3xl text-primary'>Shop today</h3>
        <h3 className='mx-auto   text-2xl text-secondary'>Free shipping!</h3>
        <div className='mt-3'>

        <p>Copyright &copy; Chris Lynch 2022</p>
        </div>
      
      
        </Link>
        
      </div>
     
    </footer>

  )

};
