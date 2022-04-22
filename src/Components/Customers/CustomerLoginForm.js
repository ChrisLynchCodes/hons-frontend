
import { useForm } from "react-hook-form";
import { Link, useLocation } from 'react-router-dom'
import { React, useState } from 'react'
import { CustomerLogin } from "../../Context/Customer/CustomerActions"
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";

export const CustomerLoginForm = () => {

  const [cookies, setCookies] = useCookies();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [labelStyle, setLabelStyle] = useState({ "display": "none" });

  let navigate = useNavigate();


  const location = useLocation();



  const onSubmit = async () => {

    const customer = {
      email: email,
      password: password
    }


    const token = await CustomerLogin(customer)

    if (token !== undefined) {

      const decoded = jwt_decode(token);

      setCookies("token", token);

      setCookies("id", decoded.Id);
      

      navigate("/account", { replace: true });

    }
    else {
      setLabelStyle({ "display": "block" })
    }

  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold">

            Log In
          </h1>

          <p className="mb-5">
            Log in to your customers account.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">

            {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            <form onSubmit={handleSubmit(onSubmit)}>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register('email', {
                  required: true, pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} type="text" placeholder="Email" className="input input-primary" onChange={(e) => (setEmail(e.target.value))} />
                {errors.email && errors.email.type === "required" && <span>The email is required</span>}
                {errors.email && errors.email.type === "minLength" && <span>The email  must be at least 2 characters</span>}
                {errors.email && errors.email.type === "pattern" && <span>Must be a valid email address</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register('password', { required: true, minLength: 8, maxLength: 32 })} type="password" placeholder="Password" className="input input-primary" onChange={(e) => (setPassword(e.target.value))} />
                {errors.password && errors.password.type === "required" && <span>Password is requried</span>}
                {errors.password && errors.password.type === "minLength" && <span>The password must be at least 8 characters</span>}
                {errors.password && errors.password.type === "maxLength" && <span>The password can not exceed 32 characters</span>}
                <label style={labelStyle} >
                  <span className="label-text">Wrong Email or Password</span>
                </label>
             
              </div>
              <div className="form-control mt-6">
                <input value="Login" type='submit' className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )







}

