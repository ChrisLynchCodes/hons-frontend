import { useEffect, useContext, useState } from "react";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import UWSSurvivalGearLogo from '../../images/UWS Survival Gear.png'
import CategoryContext from "../../Context/Category/CategoryContext";
import { GetCategories } from "../../Context/Category/CategoryActions";

import { useCookies } from "react-cookie";
import CustomerContext from "../../Context/Customer/CustomerContext";
import AdminContext from "../../Context/Admin/AdminContext";
import BasketContext from "../../Context/Basket/BasketContext";
import { GetBasketByCustomerId, CreateBasket } from '../../Context/Basket/BasketActions'
import { getRole } from "../../Routes/PrivateRoute";
import { BsBasket, BsBasket3 } from "react-icons/bs";





export const Navbar = ({ title }) => {



    const [cookies] = useCookies();




    // Gets the user role from JWT in cookies


    const { categories, categoryDispatch } = useContext(CategoryContext)
    const { customerDispatch } = useContext(CustomerContext)
    const { role, adminDispatch } = useContext(AdminContext)
    const { basket, basketDispatch } = useContext(BasketContext)
    const [quantity, setQuantity] = useState(0)


    useEffect(() => {


        const assignRole = () => {

            if (cookies.token !== undefined && cookies.token !== "undefined") {



                const role = getRole(cookies)

                if (role === 'SuperAdmin' || role === 'Admin') {
                    adminDispatch({ type: 'GET_ROLE', payload: role })
                }
                else if (role === 'Customer') {
                    customerDispatch({ type: 'GET_ROLE', payload: role })
                }
            }


        }
        assignRole();


        const getCategories = async () => {

            const categories = await GetCategories();
            categoryDispatch({ type: 'GET_CATEGORIES', payload: categories })
        }
        //call getCategories
        getCategories()



        const getBasket = async () => {

            if (cookies.id !== undefined && cookies.id !== "undefined" && role === "Customer") {

                const basket = await GetBasketByCustomerId(cookies.id);


                if (basket === false) {

                    const newBasket = await CreateBasket({
                        customerId: cookies.id,
                        basketProducts: []
                    });


                    basketDispatch({ type: 'GET_BASKET', payload: newBasket })
                } else {


                    basketDispatch({ type: 'GET_BASKET', payload: basket })

                }


            }



        }
        getBasket();






    }, [categoryDispatch, customerDispatch, role, adminDispatch, cookies, basketDispatch])

  // handle the click of hamburger to show menu on mobile
  const handleClick = () => {
    document.querySelectorAll(".mobile-menu").forEach(element => {
        element.classList.toggle("hidden");
    })
}

    // handle the click of hamburger to show menu on mobile
    const handleLinkClick = () => {
        const mobileMenu = document.getElementById("mobile-menu")
        
        mobileMenu.classList.toggle("hidden")
        
        
    }

    const style = { color: "white", fontSize: "1.5em", marginRight: "5px" }

    return (

        // <!-- Navbar goes here -->
        <nav className="shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            {/* <!-- Website Logo --> */}
                            <Link to='/'>
                                {/* <GiCampingTent className='inline pr-2 text-6xl' /> */}
                                <img src={UWSSurvivalGearLogo} alt='site-logo' className="w-50  h-20 " />
                                {/* {title} */}

                            </Link>

                        </div>
                        {/* <!-- Primary Navbar items --> */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                                Home
                            </Link>
                            <Link to='/products' className='btn btn-ghost btn-sm rounded-btn'>
                                Products
                            </Link>
                            <div className="dropdown">
                                <div tabIndex="0" className="btn btn-ghost btn-sm rounded-btn">Categories</div>
                                <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">

                                    {
                                        categories.map((category) =>
                                        (


                                            <li className='hover-bordered' key={category.id}>

                                                <Link to='/categories' state={{ id: category.id, categoryName: category.categoryName }}>
                                                    {category.categoryName}
                                                </Link>
                                            </li>

                                        ))
                                    }

                                </ul>
                            </div>
                            <Link to='/popular' className='btn btn-ghost btn-sm rounded-btn'>
                                Popular  
                            </Link>
                        </div>
                    </div>


                    {/* <!-- Secondary Navbar items --> */}

                    <div className="hidden md:flex items-center space-x-3 ">
                        {
                            role === 'SuperAdmin' || role === 'Admin' ?
                                <Link to='/admindashboard' className='btn btn-ghost btn-sm rounded-btn'>
                                    Dashboard
                                </Link>
                                : role === 'Customer' ?
                                    <><Link to='/account' className='btn btn-ghost btn-sm rounded-btn'>

                                        My Account

                                    </Link>
                                        <Link to='/checkout' className='btn btn-ghost btn-sm rounded-btn'>
                                            {(basket.basketProducts !== undefined && basket.basketProducts.length !== 0) ? <BsBasket style={style} /> : <><BsBasket3 style={style}/> 0</> }



                                        </Link></>
                                    : <Link to='/login' className='btn btn-ghost btn-sm rounded-btn'>

                                        Login
                                    </Link>

                        }
                        {
                            role === '' ? <Link to='/signup' className='btn btn-ghost btn-sm rounded-btn'>
                                Sign Up
                            </Link> : <Link to='/logout' className='btn btn-ghost btn-sm rounded-btn'>
                                Log out
                            </Link>
                        }


                    </div>




                    {/* <!-- Mobile menu button --> */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={()=>{handleClick()}}>
                            <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                      {  role === 'Customer' ? <Link to='/checkout' className='btn btn-ghost btn-sm rounded-btn'>
                            {(basket.basketProducts !== undefined && basket.basketProducts.length !== 0) ? <BsBasket style={style} /> : <BsBasket3 style={style} />}
                        </Link>: null }
                    </div>
                </div>
            </div>
            {/* <!-- mobile menu --> */}
            <div id="mobile-menu" className="hidden md:hidden mobile-menu">
                <ul className="">
                    <li className="active"> <Link to='/' onClick={(()=>{handleLinkClick()})} className='btn btn-ghost btn-sm rounded-btn'>
                        Home
                    </Link></li>
                    <li className="active"> <Link onClick={(()=>{handleLinkClick()})} to='/products' className='btn btn-ghost btn-sm rounded-btn'>
                        Products
                    </Link></li>


                    <div className="dropdown">
                        <div tabIndex="0" className="btn btn-ghost btn-sm rounded-btn">Categories</div>
                        <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">

                            {
                                categories.map((category) =>
                                (


                                    <li className='hover-bordered' key={category.id}>

                                        <Link onClick={(()=>{handleLinkClick()})} to='/categories' state={{ id: category.id, categoryName: category.categoryName }}>
                                            {category.categoryName}
                                        </Link>
                                    </li>

                                ))
                            }

                        </ul>
                    </div>



                    <li className="active"> <Link onClick={(()=>{handleLinkClick()})} to='/popular' className='btn btn-ghost btn-sm rounded-btn'>
                        Popular
                    </Link></li>
                    <li className="active">{
                        role === 'SuperAdmin' || role === 'Admin' ?
                            <Link onClick={(()=>{handleLinkClick()})} to='/admindashboard' className='btn btn-ghost btn-sm rounded-btn'>
                                dashboard
                            </Link>
                            : role === 'Customer' ?
                                <><Link onClick={(()=>{handleLinkClick()})} to='/account' className='btn btn-ghost btn-sm rounded-btn'>

                                    My Account
                                </Link><Link onClick={(()=>{handleLinkClick()})} to='/checkout' className='btn btn-ghost btn-sm rounded-btn'>
                                        {(basket.basketProducts !== undefined && basket.basketProducts.length !== 0) ? <BsBasket style={style} /> : <BsBasket3 style={style} />}



                                    </Link></>
                                : <Link onClick={(()=>{handleLinkClick()})} to='/login' className='btn btn-ghost btn-sm rounded-btn'>

                                    Login
                                </Link>
                    }
                    </li>
                    <li className="active">   {
                        role === '' ? <Link onClick={(()=>{handleLinkClick()})} to='/signup' className='btn btn-ghost btn-sm rounded-btn'>
                            Sign Up
                        </Link> : <Link onClick={(()=>{handleLinkClick()})} to='/logout' className='btn btn-ghost btn-sm rounded-btn'>
                            Log out
                        </Link>
                    }
                    </li>

                </ul>
            </div>

        </nav>
    );
};

Navbar.defaultProps = {
    title: "UWS Survival Gear"
}

Navbar.propTypes = {
    title: PropTypes.string
}