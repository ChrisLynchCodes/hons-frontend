import React from 'react';
import { ProductTable } from '../../Components/Products/ProductTable';
import {Link} from 'react-router-dom'

export const ProductListPage = () => {

  
  return (
<>
    <ProductTable />
    <br/>
    <br/>
    <br/>
    <Link to='/createproduct' style={{"float": "right"}} className='btn btn-accent btn-sm rounded-btn'>Add New Product</Link>
    <Link className="btn btn-outline btn-lg" to='/admindashboard'>Go back</Link>
    </>
  );
};
