import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import { React, useState, useContext } from 'react'
import { CreateCustomer, CustomerLogin } from "../../Context/Customer/CustomerActions"
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import BasketContext from "../../Context/Basket/BasketContext";
import { GetBasketByCustomerId, CreateBasket } from '../../Context/Basket/BasketActions'

export const SignupForm = () => {

  const [cookies, setCookies] = useCookies();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [labelStyle, setLabelStyle] = useState({ "display": "none" });
  let navigate = useNavigate();
  const { basket, basketDispatch } = useContext(BasketContext)


  const getBasket = async () => {

    if (cookies.id !== undefined && cookies.id !== "undefined") {

      const basket = await GetBasketByCustomerId(cookies.id);


      if (basket === false) {

        const newBasket = await CreateBasket({
          customerId: cookies.id,
          basketProducts: []
        });


        basketDispatch({ type: 'GET_BASKET', payload: newBasket })
      } else {


        basketDispatch({ type: 'GET_BASKET', payload: basket })

      }


    }



  }

  const onSubmit = async () => {

    const customer = {

      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }



    const createdCustomer = await CreateCustomer(customer)
    
    if (createdCustomer) {
      
      const loginDetails = {
        email: email,
        password: password,
      }
      const token = await CustomerLogin(loginDetails)
      if (token !== undefined) {

        const decoded = jwt_decode(token);

        setCookies("token", token);

        setCookies("id", decoded.Id);

        getBasket();

        navigate("/account", { replace: true });

      }
    } else {
      setLabelStyle({ "display": "block" })
    }













  }

  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold">

            Sign up
          </h1>

          <p className="mb-5">
            Sign up for an account now to make your first order today.If you need help at any point check out our <Link to='/faq' className='link link-primary'>FAQ</Link>.For more serious issues please <Link to='/contact' className='link link-primary'>get in touch with us here</Link>.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
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
                <input {...register('email', {
                  required: true, pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} type="text" placeholder="Email" className="input input-primary" onChange={(e) => (setEmail(e.target.value))} />
                {errors.email && errors.email.type === "required" && <span>The email is required</span>}
                {errors.email && errors.email.type === "minLength" && <span>The email  must be at least 2 characters</span>}
                {errors.email && errors.email.type === "pattern" && <span>Must be a valid email address</span>}
                <label style={labelStyle} >
                  <span className="label-text">Email associated with an account already</span>
                </label>
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
                  <span className="label-text">Confirm password</span>
                </label>
                <input {...register('confirmPassword', { required: true, validate: value => value === password })} type="password" placeholder="Confirm password" className="input input-primary" onChange={(e) => (setConfirmPassword(e.target.value))} />
                {errors.confirmPassword && errors.confirmPassword.type === "required" && <span>Confirm password is requried</span>}
                {errors.confirmPassword && errors.confirmPassword.type === "validate" && <span>Passwords do not match</span>}
                {/* <span>{errors.confirmPassword?.message}</span> */}
              </div>


              <div className="form-control mt-6">
                <input value="Create" type='submit' className="btn btn-accent" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
};
