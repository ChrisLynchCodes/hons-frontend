import React from 'react';
import { CustomerAvatar } from "./CustomerAvatar";

export const    AccountDetails = ({ customer: { id, email, firstName, lastName, imageLink } }) => {
    
    return (
        <>
            
            <form>

            <CustomerAvatar  avatarLink={imageLink}/>
           
                <div className="form-control">
                    <label className="label" htmlFor='email'>
                        <span className="label-text">Email</span>
                    </label>
                    <input id='email' type="text" value={email || ""} placeholder="email" readOnly={true} className="input input-primary input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First name</span>
                    </label>
                    <input  type="text" value={firstName || ""} placeholder="First name" readOnly={true} className="input input-primary input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last name</span>
                    </label>
                    <input  type="text" value={lastName || ""} placeholder="Last name" readOnly={true} className="input input-primary input-bordered" />
                </div>
            </form>

        </>
    )
};
