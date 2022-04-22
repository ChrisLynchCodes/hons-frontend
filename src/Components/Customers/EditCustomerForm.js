import { React, useEffect, useState } from 'react'
import { editCustomer } from "../../Context/Customer/CustomerActions";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { getRole } from '../../Routes/PrivateRoute';




export const EditCustomerForm = ({ customer }) => {


  const [cookies] = useCookies();

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [customerId, setCustomerId] = useState("")
  const [role, setRole] = useState("")
  const [imageLink, setImageLink] = useState("")
  let navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({});


  useEffect(() => {


    setFirstName(customer.firstName)
    setLastName(customer.lastName)
    setEmail(customer.email)
    setCustomerId(customer.id);
    setRole(getRole(cookies))
    setImageLink(customer.imageLink)

  }, [customer])





  const onSubmit = async (data) => {



    const customer = {

      firstName: firstName,
      lastName: lastName,
      email: email,
      imageLink: imageLink,
    }
    
    await editCustomer(customerId, customer, cookies.token)



    role === 'SuperAdmin' || role === 'Admin' ? navigate("/customerlist", { replace: true }) : navigate("/account", { replace: true })

  }

  return (

    <>


      <form onSubmit={handleSubmit(onSubmit)}>


        <div className="form-control">
          <label className="label">
            <span className="label-text">First name</span>
          </label>
          <input {...register('firstName', { required: true, minLength: 2, maxLength: 75 })} defaultValue={firstName} type="text" placeholder="First name" className="input input-primary" onChange={(e) => (setFirstName(e.target.value))} />
          {errors.firstName && errors.firstName.type === "required" && <span>The first name is required</span>}
          {errors.firstName && errors.firstName.type === "minLength" && <span>The first name must be at least 2 characters</span>}
          {errors.firstName && errors.firstName.type === "maxLength" && <span>The first name can not exceed 75 characters</span>}
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Last name</span>
          </label>
          <input {...register('lastName', { required: true, minLength: 2, maxLength: 75 })} defaultValue={lastName} type="text" placeholder="Last name" className="input input-primary" onChange={(e) => (setLastName(e.target.value))} />
          {errors.lastName && errors.lastName.type === "required" && <span>The last name is required</span>}
          {errors.lastName && errors.lastName.type === "minLength" && <span>The last name must be at least 2 characters</span>}
          {errors.lastName && errors.lastName.type === "maxLength" && <span>The last name can not exceed 75 characters</span>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register('email', {
            required: true, pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })} defaultValue={email} type="text" placeholder="Email" className="input input-primary" onChange={(e) => (setEmail(e.target.value))} />
          {errors.email && errors.email.type === "required" && <span>The email is required</span>}
          {errors.email && errors.email.type === "minLength" && <span>The email  must be at least 2 characters</span>}
          {errors.email && errors.email.type === "pattern" && <span>Must be a valid email address</span>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Avatar Image Link</span>
          </label>
          <input {...register("imageLink", { required: true, minLength: 5, maxLength: 200 })} defaultValue={customer.imageLink} onChange={(e) => (setImageLink(e.target.value))} type="text" placeholder="Image Link" className="input input-bordered input-primary" />
          {errors.imageLink && errors.imageLink.type === "required" && <span>The image link is required</span>}
          {errors.imageLink && errors.imageLink.type === "minLength" && <span>The image link must be at least 5 characters</span>}
          {errors.imageLink && errors.imageLink.type === "maxLength" && <span>The image link must not exceed 200 characters</span>}
        </div>


        <div className="form-control mt-6">
          <input value="Edit" type='submit' className="btn btn-accent" />
        </div>
      </form>

    </>

  )

}



