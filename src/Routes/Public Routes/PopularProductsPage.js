import { React, useEffect, useContext } from 'react'
import ProductContext from '../../Context/Product/ProductContext'
import { GetNProducts } from '../../Context/Product/ProductActions'
import { Spinner } from '../../Components/Layout/Spinner'
import { PopularProduct } from '../../Components/Products/PopularProduct'


export const PopularProductsPage = () => {

    const { products, loading, productDispatch } = useContext(ProductContext);

    useEffect(() => {

        productDispatch({ type: "SET_LOADINGs" })
        const getProducts = async () => {

            const products = await GetNProducts(9)
            productDispatch({ type: "GET_PRODUCTS", payload: products })
        }
        getProducts()
    }, [productDispatch])



    if (!loading) {
        return (
            <>
                <div className="alert alert-info mt-5 mb-10 shadow-lg">
                    <h1 className='text-center mx-auto pt-4 font-extralight  text-6xl text-primary'>Popular Products</h1>
                </div>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>


                    {products.map((product) => (
                        <PopularProduct key={product.id} product={product} />
                    ))}



                </div>

            </>


        )
    }
    else {
        return <Spinner />
    }

}
