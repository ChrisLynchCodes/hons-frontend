import axios from "axios";


const WEBAPI_URL = process.env.REACT_APP_WEBAPI_URL;



//Get orderlines for a specific order
export const GetOrderLines = async (orderId, token) => {

    const apiOrderLinesProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })
    const response = await apiOrderLinesProtected.get(`${WEBAPI_URL}/orderlines/${orderId}`)


    return response.data


}





//Get many orderlines by ids
export const GetOrderLinesByIds = async ( token, orderLineIds) => {

    const apiOrderLinesProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    

    //API Call
    try {
        const response = await apiOrderLinesProtected.post(`${WEBAPI_URL}/orderlines/GetManyOrderLinesByIdAsync/${orderLineIds}`,{
            orderLineIds: orderLineIds
        })
        return response.data

    } catch (error) {

        return error.response.data.status
    }



}









