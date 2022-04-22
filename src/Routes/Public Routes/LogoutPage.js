import { React, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const LogoutPage = () => {

    const [cookies, clearCookie] = useCookies();

    let navigate = useNavigate();
    
    useEffect(() => {

      

        const clearCookiesOnLogOut = () => {
            if (cookies.token !== undefined && cookies.token !== "undefined")
                clearCookie("token")
            if (cookies.id !== undefined && cookies.id !== "undefined")
                clearCookie("id")

                navigate("/", { replace: true });
        }
        clearCookiesOnLogOut();
        
       
        
    }, [cookies, clearCookie, navigate])


    return <div>Logout</div>;
};
