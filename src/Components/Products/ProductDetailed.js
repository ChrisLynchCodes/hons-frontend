import React, { useState, useEffect, useContext } from 'react'

import BasketContext from '../../Context/Basket/BasketContext'
import { EditBasket, GetBasketByCustomerId } from '../../Context/Basket/BasketActions'
import { getRole } from '../../Routes/PrivateRoute'
import { useCookies } from "react-cookie";


export const ProductDetailed = ({ product }) => {

  const { basket, basketDispatch } = useContext(BasketContext);
  const [cookies] = useCookies();
  const [role, setRole] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {

    setRole(getRole(cookies));


  }, [cookies])



  const handleClick = async () => {



    if (role === "Customer") {

      //get current basket
        const basket = await GetBasketByCustomerId(cookies.id)

      //If the basket contains this product id
      if (basket.basketProducts.some(e => e.productId === product.id)) {

        //get the index of the matching product in the basket
        const index = basket.basketProducts.findIndex(({ productId }) => productId === product.id);
        basket.basketProducts[index].quantity += quantity

        //PUT updated basket
        await EditBasket(basket)

        basketDispatch({ type: 'GET_BASKET', payload: basket })
      }
      else {
        //push new line
        basket.basketProducts.push({ productId: product.id, quantity: quantity, stripePrice: product.stripePrice })
        
        //PUT updated basket
        await EditBasket(basket)
 

        basketDispatch({ type: 'GET_BASKET', payload: basket })
      }

   
  



    }





  }

  return (


    <div className="card  bg-base-100 shadow-xl image-full">
      <figure><img src={product.imageLink} alt="product" /></figure>
      <div className="card-body">
      <div className="badge  badge-secondary gap-2">
                                Free Shipping
                            </div>
        <h2 className="card-title text-primary">{product.productName}</h2>
        <h3 className='text-neutral font-normal hover:font-bold'>£{product.price}</h3>
        <p>{product.description}</p>
        
        <div className="justify-end card-actions">
          {/* 
          <Link to='/checkout' className="btn btn-primary">Add to</Link> */}
          
          <button onClick={() => (handleClick())}  className={`btn btn-primary`}>Add to basket</button>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-primary">Quantity</span>
            </label>
            <select defaultValue="Quantity" className="select select-bordered" onChange={(e) => (setQuantity(parseInt(e.target.value)))}>

              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
        </div>
      </div>

    </div>
  )
}
