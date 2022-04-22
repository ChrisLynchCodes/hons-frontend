import axios from "axios";

// const WEBAPI_KEY = process.env.REACT_APP_WEBAPI_KEY;
const WEBAPI_URL = process.env.REACT_APP_WEBAPI_URL;



//Get Addresses
export const GetAddresses = async (customerId, token) => {


    const apiAddressesProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })
    const params = customerId;

    //API call
    try {
        const response = await apiAddressesProtected.get(`${WEBAPI_URL}/customers/${params}/addresses`)

        return response.data
    } catch (error) {

        return error.response.data.status
    }




}

//Get single Address
export const GetAddress = async (customrId, token, addressId) => {


    const apiAddressesProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })
 

    //API Call
    try {
        const response = await apiAddressesProtected.get(`${WEBAPI_URL}/customers/${customrId}/addresses/${addressId}`)
        return response.data

    } catch (error) {

        return error.response.data.status
    }



}
//Get many Address by id
export const GetAddressesByIds = async (customrId, token, addressIds) => {

    const apiAddressesProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    

    //API Call
    try {
        const response = await apiAddressesProtected.post(`${WEBAPI_URL}/customers/${customrId}/addresses/GetManyAddressesByIdAsync`,{
            addressIds: addressIds
        })
        return response.data

    } catch (error) {

        return error.response.data.status
    }



}

//Create and address
export const CreateAddress = async (customerId, token, address) => {

    const apiAddressesProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    //Api call
 
        const response = await apiAddressesProtected.post(`${WEBAPI_URL}/customers/${customerId}/addresses`, {

            firstLine: address.firstLine,
            secondLine: address.secondLine,
            postalCode: address.postalCode,
            city: address.city,
            mobileNumber: address.mobileNumber,
            phoneNumber: address.phoneNumber,
            country: address.country,
        
        })
        return response.data
      



}



//Edit Address

export const EditAddress = async (customerId, token, address) => {


    const apiAddressesProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })


    //API call
  try{
    const response = await apiAddressesProtected.put(`${WEBAPI_URL}/customers/${customerId}/addresses/${address.id} `, {

      
        firstLine: address.firstLine,
        secondLine: address.secondLine,
        postalCode: address.postalCode,
        city: address.city,
        mobileNumber: address.mobileNumber,
        phoneNumber: address.phoneNumber,
        country: address.country,
    })


    return response.data
  } catch (error) {

    return error.response.data.status
}





}



//Remove Address
export const DeleteAddress = async (customerId, token, addressId) => {

    const apiAddressesProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })


    //API call
 try{
      await apiAddressesProtected.delete(`${WEBAPI_URL}/customers/${customerId}/addresses/${addressId}`)
 } catch (error) {

    return error.response.data.status
}

   




}


