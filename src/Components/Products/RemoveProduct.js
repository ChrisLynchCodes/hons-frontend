import { React, useEffect, useContext } from 'react'
import { useLocation } from "react-router-dom";
import { AdminProduct } from './AdminProduct';
import ProductContext from '../../Context/Product/ProductContext';
import { GetProduct } from '../../Context/Product/ProductActions'
import { DeleteProduct } from '../../Context/Product/ProductActions'
import { useCookies } from "react-cookie";
import { Spinner } from "../../Components/Layout/Spinner";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const RemoveProduct = () => {


    const location = useLocation();
    const { from } = location.state;
    const { product, productId, loading, productDispatch } = useContext(ProductContext)
    const [cookies] = useCookies();
    let navigate = useNavigate();
    const prodId = from;



    useEffect(() => {

        productDispatch({ type: 'SET_LOADING' })

        productDispatch({ type: 'GET_PRODUCT_ID', payload: prodId })


        const getProduct = async () => {


            if (productId !== "") {

                productDispatch({ type: 'SET_LOADING' })
                const product = await GetProduct(productId)


                productDispatch({ type: 'GET_PRODUCT', payload: product })
                console.log(product)

            }

        }
        getProduct()

    }, [productDispatch, prodId, productId])




    const handleClick = async () => {

        await DeleteProduct(productId, cookies.token)
        navigate("/productlist", { replace: true });
    }




    if (loading) {

        return <Spinner />
    } else {


        return (


            <div className='grid grid-cols-1 gap-8 md:grid-cols-3 pt-5'>
                <div>
                    <img src={product.imageLink} className="mask mask-squircle" alt="product link" />
                </div>
                <AdminProduct product={product} />
                <div>
                    <div className="btn-group">
                        <h1 className='pb-3 pl-2'>Are you sure you want to remove the following product?</h1>
                        <button onClick={() => handleClick()} className="btn btn-outline btn-lg  btn-primary">
                            Remove Product
                        </button>

                        <Link className="btn btn-outline btn-lg" to='/productlist'>
                           Cancel
                        </Link>
                        

                    </div>

                </div>

            </div>

        )
    }
}
