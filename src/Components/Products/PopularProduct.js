import React from 'react'
import { Link } from 'react-router-dom'
export const PopularProduct = ({ product }) => {
    return (

        <>
            <div className="indicator">
                <span className="indicator-item indicator-center badge badge-primary">Popular!</span>
                
           
      
                    <div className="card  card-compact  bg-base-100 shadow-xl">

                        <figure><img src={product.imageLink} alt="product" /></figure>
                        <div className="card-body">
                            <div className="badge  badge-secondary gap-2">
                                Free Shipping
                            </div>
                            <h2 className="card-title">{product.productName}</h2>
                            <h2 className="card-title">£{product.price}</h2>
                            <div className="justify-center card-actions">
                                <Link to='/productdetails' state={{ product }} className="btn btn-outline btn-accent">More info</Link>
                                
                            </div>
                            <div className="justify-end card-actions">
                            <div className="badge badge-info gap-2">
                                Selling Fast!
                            </div>
                            </div>
                           
                        </div>
                    </div>
               
            </div></>

    )
}
