import { React, useEffect, useContext, useState } from 'react'
import { GetManyProductsById } from "../../Context/Product/ProductActions";
import ProductContext from '../../Context/Product/ProductContext'
import AddressContext from '../../Context/Address/AddressContext'
import { GetAddresses } from '../../Context/Address/AddressActions'
import BasketContext from '../../Context/Basket/BasketContext'
import { EditBasket } from '../../Context/Basket/BasketActions';
import { GetBasketByCustomerId, GetBasket } from "../../Context/Basket/BasketActions";
import { useCookies } from "react-cookie";
import { BsTrash } from "react-icons/bs";
import { Spinner } from '../Layout/Spinner';
import { CreateAddressCheckout } from '../Addresses/CreateAddressCheckout';

export const ProductCheckoutDisplay = () => {


    const { products, loading, productDispatch } = useContext(ProductContext);
    const { basket, basketDispatch } = useContext(BasketContext);
    const { address, addresses, addressDispatch } = useContext(AddressContext);
    const [cookies] = useCookies();
    const iconStyle = { color: "red", fontSize: "2em" }
    const [orderTotal, setOrderTotal] = useState(0);
    const [hasAddress, setHasAddress] = useState(false);


    


    useEffect(() => {

        productDispatch({ type: 'SET_LOADING' })


        //Get the cutstomer basket
        const getBasket = async () => {
           
            const basket = await GetBasketByCustomerId(cookies.id)
            
            //Get all addresses for customer
             const addresses = await GetAddresses(cookies.id, cookies.token)
             addressDispatch({ type: "GET_ADDRESSES", payload: addresses })

            //If a basket does not have an addressId
            if (basket.addressId === null) {
                
               
            
                //if customer has at least 1 address
                if (addresses.length > 0) {

                    
                    basket.addressId = addresses[0].id;
                    await EditBasket(basket)

                    const newBasket = await GetBasket(basket.id)

                    basketDispatch({ type: 'GET_BASKET', payload: newBasket })
                    setHasAddress(true);
                }


            }else{
                setHasAddress(true)
            }

            basketDispatch({ type: 'GET_BASKET', payload: basket })

            let productIds = []

            basket.basketProducts.map((item) => (
                productIds.push(item.productId)
            ))

            const products = await GetManyProductsById(productIds)
            productDispatch({ type: 'GET_PRODUCTS', payload: products })
            let total = 0.0;
            products.map((product) => (
                basket.basketProducts.map((item) => (
                    product.id === item.productId ? total += (product.price * item.quantity) : 0
                ))
            ))
            setOrderTotal(total)

        }
        getBasket()
    }, [basketDispatch, productDispatch, cookies, addressDispatch])



    const increaseQuantity = async (item) => {


        const index = basket.basketProducts.findIndex(x => x.productId === item.productId);
        basket.basketProducts[index].quantity += 1

        await EditBasket(basket)
        const newBasket = await GetBasketByCustomerId(cookies.id)

        basketDispatch({ type: 'GET_BASKET', payload: newBasket })

        let total = 0.0;
        products.map((product) => (
            basket.basketProducts.map((item) => (
                product.id === item.productId ? total += (product.price * item.quantity) : 0
            ))
        ))
        setOrderTotal(total)

    }

    const decreaseQuantity = async (item) => {


        const index = basket.basketProducts.findIndex(x => x.productId === item.productId);
        //-1 because quantity hasn't been updated yet

        if (basket.basketProducts[index].quantity > 1) {
            basket.basketProducts[index].quantity -= 1
        }



        await EditBasket(basket)
        const newBasket = await GetBasketByCustomerId(cookies.id)

        basketDispatch({ type: 'GET_BASKET', payload: newBasket })
        let total = 0.0;
        products.map((product) => (
            basket.basketProducts.map((item) => (
                product.id === item.productId ? total += (product.price * item.quantity) : 0
            ))
        ))
        setOrderTotal(total)
    }


    const removeItem = async (item) => {


        const index = basket.basketProducts.findIndex(x => x.productId === item.productId);

        basket.basketProducts.splice(index, 1)

        await EditBasket(basket)
        const newBasket = await GetBasketByCustomerId(cookies.id)

        basketDispatch({ type: 'GET_BASKET', payload: newBasket })
        let productIds = []

        basket.basketProducts.map((item) => (
            productIds.push(item.productId)
        ))

        const products = await GetManyProductsById(productIds)


        productDispatch({ type: 'GET_PRODUCTS', payload: products })
        let total = 0.0;
        products.map((product) => (
            basket.basketProducts.map((item) => (
                product.id === item.productId ? total += (product.price * item.quantity) : 0
            ))
        ))
        setOrderTotal(total)

    }

    const changeAddress = async (e) => {

        basket.addressId = e.target.value


        await EditBasket(basket)

        const newBasket = await GetBasket(basket.id)

        basketDispatch({ type: 'GET_BASKET', payload: newBasket })



    }
    if (loading) {
        return (<Spinner />)
    } else {

        return (



            <div className='grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3'>
                <div></div>
                <section>

                    {/* Customer selects address for order */}
                    {
                        hasAddress ? <div className='mb-5 mt-2'>
                            <label>Select an address</label><br/>
                            <select required={true} className="select select-bordered select-primary w-full max-w-xs" onChange={(e) => (changeAddress(e))}>
                            {/* <option disabled="disabled" selected="selected">Choose delivery address</option> */}
                                {
                                    addresses.map((address) =>
                                    (


                                        <option key={address.id} value={address.id}>{address.firstLine}</option>

                                    ))
                                }
                            </select>
                        </div>
                            : <div className='mb-5'>
                                <CreateAddressCheckout />
                            </div>



                    }
                    {products.map((product) => (



                        <div key={product.id} className="product">
                            <div className="avatar">
                                <div className="w-32 rounded">
                                    <img src={product.imageLink} alt="prod avatar" />
                                </div>
                            </div>
                            <div className="description">
                                <h3>{product.productName}</h3>
                                <h5>£{product.price}</h5>


                            </div>


                            {
                                basket.basketProducts.map((item) => (


                                    item.productId === product.id ? <div key={item.productId} className="form-control">
                                        <h3>Quantity {item.quantity} --- Line total £{(product.price * item.quantity).toFixed(2)}</h3>
                                        <label className="input-group">
                                            <button className='btn glass' onClick={() => (decreaseQuantity(item))}>-</button>
                                            <input type="text" placeholder={item.quantity} className="input input-bordered" />
                                            <button className='btn glass btn-outline btn-primary' onClick={() => (increaseQuantity(item))}>+</button>
                                            <button onClick={() => (removeItem(item))}><BsTrash className='ml-5' style={iconStyle} /></button>
                                        </label>
                                    </div> : null
                                ))
                            }


                        </div>



                    ))}

                    <div>
                        <h3>Order total £{orderTotal.toFixed(2)}</h3>
                    </div>

                    <form className='pt-2' action="https://honsbackendapiservice.azurewebsites.net/api/checkout/create" method="POST">
                        <input name="basketId" type="hidden" value={basket.id} />
                        {hasAddress && basket.basketProducts.length > 0 ? <button className="btn btn-primary" type="submit"> Checkout
                        </button> : null}

                    </form>
                </section>

            </div>
        )
    }

}
