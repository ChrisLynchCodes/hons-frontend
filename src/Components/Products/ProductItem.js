import React from 'react';
import { Link } from 'react-router-dom'
export const ProductItem = ({ product: { id, productName, price, description, imageLink, stripePrice } }) => {



  return (
    <>


      <div className="card text-center shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={imageLink} className="rounded-xl" alt='product' />
        </figure>
        <div className="card-body">
          <div className="badge  badge-secondary gap-2">
            Free Shipping
          </div>
          <h2 className="card-title">{productName}</h2>
          <p>£{price}</p>

          <div className="justify-center card-actions">
            <Link to='/productdetails' state={{ product: { id, productName, price, stripePrice, description, imageLink } }} className="btn btn-outline btn-accent">More info</Link>
          </div>
        </div>
      </div>



    </>
  );
};
