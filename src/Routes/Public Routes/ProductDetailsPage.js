import React from 'react'
import { ProductDetailed } from '../../Components/Products/ProductDetailed'
import { useLocation } from "react-router-dom";
import logo from '../../images/UWS Survival Gear.png'
import { FaMoneyBillAlt } from "react-icons/fa";



export const ProductDetailsPage = () => {


    const location = useLocation();

    const { product } = location.state;



    return (

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 mt-5'>
            <div>
                <div className="  card  card-compact  bg-base-100 shadow-xl">
                    <figure><img src={product.imageLink} alt="Shoes" /></figure>
                  
                </div>
                <div className="card  bg-base-100 shadow-xl">
 

</div>
            </div>
            <div>
                <ProductDetailed product={product} />
            </div>
            <div>
            
            <div className="card-body">
    <h2 className="card-title">{product.productName}</h2>
    <p>{product.description}</p>
    <img src={logo} alt="Shoes" />
    <p className='text-center text-2xl overline'>£{product.price}</p> 
  </div>
            </div>
        </div>


    )
}
