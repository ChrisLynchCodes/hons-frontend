import axios from "axios";
const WEBAPI_KEY = process.env.REACT_APP_WEBAPI_KEY;
const WEBAPI_URL = process.env.REACT_APP_WEBAPI_URL;
// ==============="proxy": "https://localhost:7270/api",==========================
const apiAdmins = axios.create({

    headers: {
        Accept: "application/json",
        ApiKey: WEBAPI_KEY,


    }
})

//Get Admins
export const GetAdmins = async (token) => {


    const apiAdminsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })



    const response = await apiAdminsProtected.get(`${WEBAPI_URL}/admins`)

    return response.data



}


//Get single admin 
export const GetAdmin = async (adminId, adminToken) => {


    const apiAdminsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + adminToken


        }
    })
    const id = adminId;


    const response = await apiAdminsProtected.get(`${WEBAPI_URL}/admins/${id}`)

    return response.data

}


export const CreateAdmin = async (admin, token) => {



    const apiAdminsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    const response = await apiAdminsProtected.post(`${WEBAPI_URL}/admins/register`, {

        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
        password: admin.password,
        confirmPassword: admin.confirmPassword,
        imageLink: admin.imageLink,
    })


    return response.data


}


//Edit Admin

export const editAdmin = async (adminId, admin, token) => {

    const apiAdminsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })


    const params = adminId;

    const response = await apiAdminsProtected.put(`${WEBAPI_URL}/admins/${params}`, {

        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email
    })


    return response.data


}



//Remove admin
export const DeleteAdmin = async (adminId, token) => {

    const apiAdminsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + token


        }
    })

    const params = adminId;
    await apiAdminsProtected.delete(`${WEBAPI_URL}/admins/${params}`)




}

export const AdminLogin = async (admin) => {



    const email = admin.email;
    const password = admin.password;



    try {
        const response = await apiAdmins.post(`${WEBAPI_URL}/admins/login`, {
            email: email,
            password: password
        })
        return response.data
       //response.data is the token


    } catch (error) {


       return  error.response.data.status 
    }
}






