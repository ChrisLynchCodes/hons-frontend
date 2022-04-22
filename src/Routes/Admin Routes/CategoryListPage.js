import React from 'react';
import { CategoryTable } from '../../Components/Categories/CategoryTable';
import { Link } from 'react-router-dom'

export const CategoryListPage = () => {


  return (
    <>
      <CategoryTable />
      <br />
      <br />
      <br />

      <Link to='/createcategory' style={{ "float": "right" }} className='btn btn-accent btn-sm rounded-btn'>Add New Category</Link>

      <Link className="btn btn-outline btn-lg" to='/admindashboard'>Go back</Link>
    </>
  );
};
