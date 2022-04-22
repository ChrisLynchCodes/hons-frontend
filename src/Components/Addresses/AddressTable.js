import { React, useEffect, useContext } from 'react';
import { Spinner } from "../Layout/Spinner";
import { GetAddresses } from '../../Context/Address/AddressActions';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import AddressContext from '../../Context/Address/AddressContext';


export const AddressTable = () => {


    const { addresses, loading, addressDispatch } = useContext(AddressContext)
    const [cookies] = useCookies();

    let addressCount = 0


    useEffect(() => {


        addressDispatch({ type: 'SET_LOADING' })

        const getAddresses = async () => {

            const addresses = await GetAddresses(cookies.id, cookies.token)

            addressDispatch({ type: 'GET_ADDRESSES', payload: addresses })
        }
        getAddresses();






    }, [addressDispatch, cookies])





    if (!loading) {


        return (
            <div className='grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {addresses.map((address) => (
                    <div key={address.id} className="card w-76  bg-neutral shadow-xl">
                        <div className="card-body">

                            <h2 className="card-title">Address {++addressCount}</h2>
                            <p className='bg-neutral-content' >.</p>
                            <p> {address.firstLine} </p>
                            <p>{address.secondLine}</p>
                            <p>{address.postalCode}</p>
                            <p>{address.city}</p>
                            <p>{address.mobileNumber}</p>
                            <p>{address.phoneNumber}</p>
                            <p>{address.country}</p>

                            <div className="justify-end card-actions">
                                <Link to='/customereditaddress' state={{ addressToEdit: address }} className="btn btn-primary">Select</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        )

    }
    else {
        return <Spinner />
    }

};


/* Might need to add the customer id in here for the situation where admins are Editing
Wont be able to get cust id from admin cookie. */