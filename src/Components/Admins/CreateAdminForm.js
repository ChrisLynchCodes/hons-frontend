import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CreateAdmin } from '../../Context/Admin/AdminActions'
import { useCookies } from "react-cookie";


export const  CreateAdminForm = () => {


 


  const { register, handleSubmit, formState: { errors, } } = useForm();
  const [cookies] = useCookies();
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  

  const onSubmit = async (event) => {


    const admin = {

      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }


    await CreateAdmin(admin, cookies.token)

    navigate("/adminlist", { replace: true });


  }


  return (

    <form onSubmit={handleSubmit(onSubmit)}>


      <div className="form-control">
        <label className="label">
          <span className="label-text">First name</span>
        </label>
        <input {...register('firstName', { required: true, minLength: 2, maxLength: 75 })} type="text" placeholder="First name" className="input input-primary" onChange={(e) => (setFirstName(e.target.value))} />
        {errors.firstName && errors.firstName.type === "required" && <span>The first name is required</span>}
        {errors.firstName && errors.firstName.type === "minLength" && <span>The first name must be at least 2 characters</span>}
        {errors.firstName && errors.firstName.type === "maxLength" && <span>The first name can not exceed 75 characters</span>}
      </div>



      <div className="form-control">
        <label className="label">
          <span className="label-text">Last name</span>
        </label>
        <input {...register('lastName', { required: true, minLength: 2, maxLength: 75 })} type="text" placeholder="Last name" className="input input-primary" onChange={(e) => (setLastName(e.target.value))} />
        {errors.lastName && errors.lastName.type === "required" && <span>The last name is required</span>}
        {errors.lastName && errors.lastName.type === "minLength" && <span>The last name must be at least 2 characters</span>}
        {errors.lastName && errors.lastName.type === "maxLength" && <span>The last name can not exceed 75 characters</span>}
      </div>


      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input {...register('email', { required: true, pattern:  	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} type="text" placeholder="Email" className="input input-primary" onChange={(e) => (setEmail(e.target.value))} />
        {errors.email && errors.email.type === "required" && <span>The email is required</span>}
        {errors.email && errors.email.type === "minLength" && <span>The email  must be at least 2 characters</span>}
        {errors.email && errors.email.type === "pattern" && <span>Must be a valid email address</span>}
      </div>


      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input {...register('password', { required: true, minLength: 8, maxLength: 32, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,32})/ })} type="password" placeholder="Password" className="input input-primary" onChange={(e) => (setPassword(e.target.value))} />
        {errors.password && errors.password.type === "required" && <span>Password is requried</span>}
        {errors.password && errors.password.type === "pattern" && <span>Passwords must contain at least 1 digit, 1 lowercase, 1 uppercase, and 1 special character. Between 8 - 32 characters</span>}
        {errors.password && errors.password.type === "minLength" && <span>The password must be at least 8 characters</span>}
        {errors.password && errors.password.type === "maxLength" && <span>The password can not exceed 32 characters</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <input {...register('confirmPassword', { required: true, validate: value => value === password  })} type="password" placeholder="Confirm Password" className="input input-primary" onChange={(e) => (setConfirmPassword(e.target.value))} />
        {errors.confirmPassword && errors.confirmPassword.type === "required" && <span>Confirm password is requried</span>}
        {errors.confirmPassword && errors.confirmPassword.type === "validate" && <span>Passwords do not match</span>}
      {/* <span>{errors.confirmPassword?.message}</span> */}
      </div>


      <div className="form-control mt-6">
        <input value="Create" type='submit' className="btn btn-accent" />
      </div>
    </form>


  )
}
