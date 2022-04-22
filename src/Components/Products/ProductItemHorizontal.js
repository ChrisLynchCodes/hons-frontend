import React from 'react';
import {Link} from 'react-router-dom'

export const ProductItemHorizontal = ({ product: { id, productName, price, description, imageLink, stripePrice } }) => {
  return (
    <>


      <Link to='/productdetails' state={{ product: { id, productName, price, stripePrice, description, imageLink } }} >
        <div className="card  card-bordered card-compact lg:card-normal">
          <figure>
            <img src={imageLink} className="rounded-xl" alt='product' />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{productName}</h2>
            <p>£{price}</p>
            <div className="badge  badge-secondary gap-2">
                                Free Shipping
                            </div>
          </div>
        </div>

      </Link>

    </>
  );
};
