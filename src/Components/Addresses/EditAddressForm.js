import { React, useEffect, useState } from 'react'
import { EditAddress } from "../../Context/Address/AddressActions";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";





export const EditAddressForm = ({ address }) => {


    const [cookies] = useCookies();

    const [firstLine, setFirstLine] = useState("")
    const [secondLine, setSecondLine] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [city, setCity] = useState("")
    const [mobileNumber, setmobileNumber] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [country, setCountry] = useState("")
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({});


    useEffect(() => {


        setFirstLine(address.firstLine)
        setSecondLine(address.secondLine)
        setPostalCode(address.postalCode)
        setCity(address.city);
        setmobileNumber(address.mobileNumber)
        setphoneNumber(address.phoneNumber)
        setCountry(address.country)

    }, [address])





    const onSubmit = async () => {



        const customerAddress = {
            id: address.id,
            firstLine: firstLine,
            secondLine: secondLine,
            postalCode: postalCode,
            city: city,
            mobileNumber: mobileNumber,
            phoneNumber: phoneNumber,
            country: country
        }

        await EditAddress(cookies.id, cookies.token, customerAddress)



        navigate("/customeraddreslist", { replace: true })

    }

    return (

        <>


            <form onSubmit={handleSubmit(onSubmit)}>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First line</span>
                    </label>
                    <input {...register('firstLine', { required: true, minLength: 2, maxLength: 400 })} type="text" defaultValue={firstLine} placeholder="First line" className="input input-primary" onChange={(e) => (setFirstLine(e.target.value))} />
                    {errors.firstLine && errors.firstLine.type === "required" && <span>The first line is required</span>}
                    {errors.firstLine && errors.firstLine.type === "minLength" && <span>The first line must be at least 2 characters</span>}
                    {errors.firstLine && errors.firstLine.type === "maxLength" && <span>The first line can not exceed 400 characters</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Second line</span>
                    </label>
                    <input {...register('secondLine', { required: false, minLength: 2, maxLength: 400 })} type="text" defaultValue={secondLine} placeholder="First line" className="input input-primary" onChange={(e) => (setSecondLine(e.target.value))} />

                    {errors.secondLine && errors.secondLine.type === "minLength" && <span>The second line must be at least 2 characters</span>}
                    {errors.secondLine && errors.secondLine.type === "maxLength" && <span>The second line can not exceed 400 characters</span>}
                </div>




                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Postal code</span>
                    </label>
                    <input {...register('postalCode', { required: true, minLength: 2, maxLength: 9 })} type="text" defaultValue={postalCode} placeholder="Postal code" className="input input-primary" onChange={(e) => (setPostalCode(e.target.value))} />
                    {errors.postalCode && errors.postalCode.type === "required" && <span>The postal code is required</span>}
                    {errors.postalCode && errors.postalCode.type === "minLength" && <span>The postal code must be at least 2 characters</span>}
                    {errors.postalCode && errors.postalCode.type === "maxLength" && <span>The Postal code can not exceed 9 characters</span>}
                </div>






                <div className="form-control">
                    <label className="label">
                        <span className="label-text">City</span>
                    </label>
                    <input {...register('city', { required: true, minLength: 2, maxLength: 48 })} type="text" defaultValue={city} placeholder="City" className="input input-primary" onChange={(e) => (setCity(e.target.value))} />
                    {errors.city && errors.city.type === "required" && <span>The city  is required</span>}
                    {errors.city && errors.city.type === "minLength" && <span>The city  must be at least 2 characters</span>}
                    {errors.city && errors.city.type === "maxLength" && <span>The city  can not exceed 48 characters</span>}
                </div>







                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Mobile phone</span>
                    </label>
                    <input {...register('mobileNumber', { required: true, minLength: 5, maxLength: 20 })} type="tel" defaultValue={mobileNumber} placeholder="Mobile phone" className="input input-primary" onChange={(e) => (setmobileNumber(e.target.value))} />
                    {errors.mobileNumber && errors.mobileNumber.type === "required" && <span>The mobile phone number is required</span>}
                    {errors.mobileNumber && errors.mobileNumber.type === "minLength" && <span>The mobile phone number must be at least 5 characters</span>}
                    {errors.mobileNumber && errors.mobileNumber.type === "maxLength" && <span>The mobile phone number must not exceed 20 characters</span>}
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Landline phone</span>
                    </label>
                    <input {...register('phoneNumber', { required: false, minLength: 5, maxLength: 20 })} type="tel" defaultValue={phoneNumber} placeholder="Landline phone" className="input input-primary" onChange={(e) => (setphoneNumber(e.target.value))} />

                    {errors.phoneNumber && errors.phoneNumber.type === "minLength" && <span>The landline phone number must be at least 5 characters</span>}
                    {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && <span>The landline phone number must not exceed 20 characters</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Country</span>
                    </label>
                    <input {...register('country', { required: true, minLength: 2, maxLength: 20 })} type="text" placeholder="Country" defaultValue={country} className="input input-primary" onChange={(e) => (setCountry(e.target.value))} />
                    {errors.country && errors.country.type === "required" && <span>The country is required</span>}
                    {errors.country && errors.country.type === "minLength" && <span>The country must be at least 2 characters</span>}
                    {errors.country && errors.country.type === "maxLength" && <span>The country can not exceed 20 characters</span>}
                </div>



                <div className="form-control mt-6">
                    <input value="Edit" type='submit' className="btn btn-accent" />
                </div>
            </form>

        </>

    )

}



