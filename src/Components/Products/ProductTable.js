import { React, useEffect, useContext } from 'react';
import { Spinner } from "../Layout/Spinner";
import ProductContext from '../../Context/Product/ProductContext';
import { GetProducts } from '../../Context/Product/ProductActions';
import CategoryContext from '../../Context/Category/CategoryContext';
import { GetCategories } from '../../Context/Category/CategoryActions';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';


export const ProductTable = () => {


    const { products, loading, productDispatch } = useContext(ProductContext)
    const { categories, categoryDispatch } = useContext(CategoryContext)
    let productCount = 0;

    useEffect(() => {


        productDispatch({ type: 'SET_LOADING' })

        const getProducts = async () => {

            const products = await GetProducts()
            productDispatch({ type: 'GET_PRODUCTS', payload: products })
        }
        getProducts();

        const getCategories = async () => {
            const categories = await GetCategories()
            categoryDispatch({ type: 'GET_CATEGORIES', payload: categories })
        }
        getCategories();



    }, [productDispatch, categoryDispatch])





    if (!loading) {


        return (
            <div className="overflow-x-auto mt-5">
                <table className="table w-full table-compact">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Category</th>



                        </tr>
                    </thead>
                    <tbody>

                        {

                            products.map((product) => (
                                <tr className='hover' key={product.id}>
                                    <th>{productCount = productCount + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={product.imageLink} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.productName}</div>
                                              
                                            </div>
                                        </div>
                                    </td>
                             
                                    <td>£{product.price.toFixed(2)}</td>
                                    <td>{product.stockRemaining}</td>
                                
                                    <td>{product.createdAt.substring(0, 10)} ~ {product.createdAt.substring(11, 16)}</td>
                                    <td>{product.updatedAt.substring(0, 10)} ~ {product.updatedAt.substring(11, 16)}</td>
                                    {categories.map((category) => (


                                        category.id === product.categoryId ? <td key={category.id}>{category.categoryName}</td> : null

                                    ))}



                                    <td>
                                        <Link to='/editproduct' state={{ from: product.id }} className='btn btn-ghost btn-sm rounded-btn'>
                                            <FaEdit style={{"color": "grey"}} />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to='/removeproduct' state={{ from: product.id }} className='btn btn-ghost btn-sm rounded-btn'>
                                            <FaRegTrashAlt style={{"color": "red"}} />
                                        </Link>
                                    </td>


                                    {/* <td>{product.description}</td> */}
                                </tr>

                            ))
                        }


                    </tbody>
                    <tfoot>
                        <tr>
                        <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Category</th>

                        </tr>
                    </tfoot>
                </table>
            </div>
        )

    }
    else {
        return <Spinner />
    }

};
