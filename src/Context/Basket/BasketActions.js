import axios from "axios";


const WEBAPI_URL = process.env.REACT_APP_WEBAPI_URL;




export const GetBaskets = async (token) => {

    const apiBasketsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })
    const response = await apiBasketsProtected.get(`${WEBAPI_URL}/baskets`)


    return response.data


}

//Get basket by basket id
export const GetBasket = async (basketId, token) => {


    const apiBasketsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })


    const params = basketId;
    const response = await apiBasketsProtected.get(`${WEBAPI_URL}/baskets/${params}`)


    return response.data


}

//get basket by customer id
export const GetBasketByCustomerId = async (customerId, token) => {
    const apiBasketsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    try {
        const params = customerId;
        const response = await apiBasketsProtected.get(`${WEBAPI_URL}/baskets/getbycustomerid/${params}`)
        return response.data
        


    } catch (error) {
        
        return false
    }





  


}



//Create a basket
export const CreateBasket = async (basket, token) => {

    const apiBasketsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })


    const response = await apiBasketsProtected.post(`${WEBAPI_URL}/baskets`, {

        customerId: basket.customerId,
        basketProducts: basket.basketProducts,


    })


    return response.data


}



//Edit Basket

export const EditBasket = async (basket, token) => {


    const apiBasketsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    const params = basket.id;

    const response = await apiBasketsProtected.put(`${WEBAPI_URL}/baskets/${params}`, {

        customerId: basket.customerId,
        basketProducts: basket.basketProducts,
        addressId: basket.addressId
    })


    return response.data


}



//Remove basket
export const DeleteBasket = async (basketId, token) => {

    const apiBasketsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    const params = basketId;
    await apiBasketsProtected.delete(`${WEBAPI_URL}/baskets/${params}`)




}




