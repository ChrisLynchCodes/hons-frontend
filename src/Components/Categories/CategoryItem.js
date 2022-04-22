import React from 'react';
import { Link } from "react-router-dom";

export const CategoryItem = ({ category: { id, categoryName, thumbnail, description } }) => {

 
  return (
    <>
      <Link to='/categories' state={{ id: id, categoryName: categoryName }}>
        <div className="card shadow-xl image-full">
          <figure>
            <img src={thumbnail} alt='thumbnail'/>
          </figure>
          <div className="justify-end card-body">
            <h2 className="card-title">{categoryName}</h2>
          </div>
        </div>

      </Link>

    </>
  );
};
