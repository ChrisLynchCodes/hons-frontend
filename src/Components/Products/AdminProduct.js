import { React, useContext, useEffect } from 'react'
import CategoryContext from "../../Context/Category/CategoryContext";
import { GetCategory } from "../../Context/Category/CategoryActions";

export const AdminProduct = ({ product }) => {


    const { category, categoryDispatch } = useContext(CategoryContext);

    useEffect(() => {
       
        categoryDispatch({ type: 'SET_LOADING' })

        const getCategory = async () => {

            const category = await GetCategory(product.categoryId);
            
            categoryDispatch({ type: 'GET_CATEGORY', payload: category })

        }
      
        getCategory()

    }, [categoryDispatch, product.categoryId])
   

    return (
      
        <>
        <div>
               
        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" placeholder="Product name" value={product.productName} className="input input-bordered w-full max-w-xs" disabled />
                        

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">price</span>

                        </label>
                        <input type="text" placeholder="Price" value={product.price} className="input input-bordered w-full max-w-xs" disabled />
                        

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Stock Remaining</span>

                        </label>
                        <input type="text" placeholder="Category name" value={product.stockRemaining} className="input input-bordered w-full max-w-xs" disabled />
                        

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Stock Remaining</span>

                        </label>
                        <input type="text" placeholder="Category name" value={product.stockRemaining} className="input input-bordered w-full max-w-xs" disabled />
                        

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image Link</span>

                        </label>
                        <input type="text" placeholder="Category name" value={product.imageLink} className="input input-bordered w-full max-w-xs" disabled />
                        

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Category</span>

                        </label>
                        <input type="text" placeholder="Category name" value={category.categoryName} className="input input-bordered w-full max-w-xs" disabled />
                        

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>

                        </label>
                        <textarea type="text" placeholder="Category name" value={product.description} className="input input-bordered w-full max-w-xs text-area" disabled />
                      

                    </div>
        </div>
     
        

            {/* <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.productName}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Price</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">£{product.price}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Stock Remaining</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.stockRemaining}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Image Link</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.imageLink}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Created At</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.createdAt}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Updated At</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.updatedAt}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Category</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{category.categoryName}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Description</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.description}</dd>
                        </div>

                    </dl>
                </div>
                
            </div> */}
            </>





    )
}




