import { React } from 'react'


export const OrderLine = ({ product, orderLines, orderComplete }) => {






  return (
    <div className='mt-10'>

      <div className="card bg-base-100 shadow-xl">
        <figure><img src={product.imageLink} alt="product" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.productName }
         
          </h2>
          
          {orderLines.map((line) => (
            line.productId === product.id ? <div key={product.id}>Quantity Purchased {line.quantity}</div> : null
          ))}

          <div>£{product.price}</div>
          <div className="card-actions justify-end">
          <div className="badge badge-primary">
              {orderComplete === 'Pending' ? "Pending Shipment" :
                orderComplete === 'Dispatched' ? "Dispatched" :
                  orderComplete === 'Complete' ? "Complete" : ""
              }
            </div>



          </div>
        </div>
      </div>










    </div>
  )
}
