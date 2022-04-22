import { React, useState, useContext } from 'react';
import { SearchProducts } from "../../Context/Product/ProductActions"
import ProductContext from '../../Context/Product/ProductContext';
import AlertContext from '../../Context/Alert/AlertContext';

export const ProductSearch = () => {

    const [text, setText] = useState("");
    const { products, productDispatch } = useContext(ProductContext);

    const { setAlert } = useContext(AlertContext);

    //Handle the submit for searching products
    const handleSubmit = async (event) => {
        
        event.preventDefault();
        if (text === '') {

            setAlert('Please enter something', 'error')
        }
        else {
            productDispatch({ type: 'SET_LOADING' })
            
            const products = await SearchProducts(text)
           
            //calling action in actions file - dispatching action to reducer - passing payload -   updating user state
            productDispatch({ type: 'GET_PRODUCTS', payload: products })
      
            setText('');
        }

    }
    return (

        <>
            <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 pt-10 gap-8 '>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-control'>
                            <div className='relative'>
                                <input type="text" placeholder="Search" className="w-full pr-16 input input-primary input-bordered" value={text} onChange={(event) => setText(event.target.value)} />
                                <button className="absolute top-0 right-0 rounded-l-none btn btn-primary" type='submit' >Search</button>
                            </div>
                        </div>

                    </form>
                </div>
                {products.length > 0 && (<div >
                    <button className='btn btn-ghost btn-lrg' onClick={() => productDispatch({ type: "CLEAR_PRODUCTS" })}>Clear</button>
                </div>)}

            </div>
        </>
    )
};

