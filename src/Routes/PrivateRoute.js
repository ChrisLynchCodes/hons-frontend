import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";





export const PrivateAdminRoute = ({ children }) => {

    const [cookies] = useCookies();
    const role = getRole(cookies)


    if (role === 'SuperAdmin' || role === 'Admin') {
      
        return children
    }


    return <Navigate to="/" />
}


export const PrivateCustomerRoute = ({ children }) => {

    const [cookies] = useCookies();
    const role = getRole(cookies)


    if (role === 'Customer') {
      
        return children
    }


    return <Navigate to="/" />
}

export const PrivateSuperAdminRoute = ({ children }) => {

    const [cookies] = useCookies();
    const role = getRole(cookies)


    if (role === 'SuperAdmin') {
       
        return children
    }


    return <Navigate to="/" />
}



export const getRole = (cookies) => {

    if (cookies.token !== undefined && cookies.token !== "undefined") {

        const token = cookies.token;

        const decoded = jwt_decode(token);

        const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]

        return role;

    } else {
        const role = 'No role';
        return role;
    }

}

