import { React, useContext, useEffect } from 'react';
import { Spinner } from "../Layout/Spinner";
import ProductContext from "../../Context/Product/ProductContext"
import { ProductItemHorizontal } from './ProductItemHorizontal';
import { GetProducts } from '../../Context/Product/ProductActions';


export const ProductResults = () => {

    const { products, loading, productDispatch } = useContext(ProductContext)

    useEffect(() => {

        const getProducts = async () => {

            const products = await GetProducts()
            productDispatch({ type: "GET_PRODUCTS", payload: products })
        }
        getProducts()
    }, [productDispatch])



    if (!loading) {
        return (


            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {
                    products.map((product) =>
                    (


                        <ProductItemHorizontal key={product.id} product={product} />

                    ))
                }
            </div>

        );
    } else {
        return <Spinner />
    }



};

