import axios from "axios";


const WEBAPI_URL = process.env.REACT_APP_WEBAPI_URL;




export const GetOrders = async (token) => {

    const apiOrdersProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })
    const response = await apiOrdersProtected.get(`${WEBAPI_URL}/orders`)


    return response.data


}

//Get order by id
export const GetOrder = async (orderId, token) => {


    const apiOrdersProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })


    const params = orderId;
    const response = await apiOrdersProtected.get(`${WEBAPI_URL}/orders/${params}`)


    return response.data


}



//Get latest order by customer id
export const GetLatestOrder = async (customerId, token) => {


    const apiOrdersProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })


    const params = customerId;
    
    const response = await apiOrdersProtected.get(`${WEBAPI_URL}/orders/getlatestorder/${params}`)
    

    return response.data


}

//get all orders for customer id
export const GetOrderByCustomerId = async (customerId, token) => {
    const apiOrdersProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    try {
        const params = customerId;
        const response = await apiOrdersProtected.get(`${WEBAPI_URL}/orders/getorders/${params}`)
        return response.data



    } catch (error) {

        return false
    }








}







//Edit Order

export const EditOrder = async (orderId, order, token) => {


    const apiOrdersProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    const params = orderId;

    const response = await apiOrdersProtected.put(`${WEBAPI_URL}/orders/${params}`, {

        customerId: order.customerId,
        addressId: order.addressId,
        status: order.status
    })


    return response.data


}








