import axios from "axios";
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const WEBAPI_KEY = process.env.REACT_APP_WEBAPI_KEY;
const WEBAPI_URL = process.env.REACT_APP_WEBAPI_URL;

const apiCustomers = axios.create({

    headers: {
        Accept: "application/json",
        ApiKey: WEBAPI_KEY,


    }
})


//Get Customers
export const GetCustomers = async (token) => {


    const apiCustomersProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })



    const response = await apiCustomersProtected.get(`${WEBAPI_URL}/customers`)

    return response.data



}

//Get single customer 
export const GetCustomer = async (customrId, token) => {


    const apiCustomersProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })
    const id = customrId;


    const response = await apiCustomersProtected.get(`${WEBAPI_URL}/customers/${id}`)

    return response.data



}
//Get many Customers by id
export const GetCustomersByIds = async (token, customerIds) => {

    const apiCustomersProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    

    //API Call
    try {
        const response = await apiCustomersProtected.post(`${WEBAPI_URL}/customers/GetManyCustomersByIdAsync`,{
            customerIds: customerIds
        })
        return response.data

    } catch (error) {

        return error.response.data.status
    }



}


export const CreateCustomer = async (customer) => {



    try {
        const response = await apiCustomers.post(`${WEBAPI_URL}/customers/register`, {

            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            password: customer.password,
            confirmPassword: customer.confirmPassword
        })
        return response.data
        //response.data is the token


    } catch (error) {

        return error.response.data.status
    }

}



//Edit Customer

export const editCustomer = async (customerId, customer, token) => {


    const apiCustomersProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    const params = customerId;

    const response = await apiCustomersProtected.put(`${WEBAPI_URL}/customers/${params}`, {

        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        imageLink: customer.imageLink
    })


    return response.data


}



//Remove customer
export const DeleteCustomer = async (customerId, token) => {

    const apiCustomersProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    const params = customerId;
    await apiCustomersProtected.delete(`${WEBAPI_URL}/customers/${params}`)




}



//CustomerLogin
export const CustomerLogin = async (customer) => {

    const email = customer.email;
    const password = customer.password;


    try {
        const response = await apiCustomers.post(`${WEBAPI_URL}/customers/login`, {
            email: email,
            password: password
        })
        
        return response.data
        //response.data is the token


    } catch (error) {

        return error.response.data.status
    }


}