import React from 'react';
import { AdminAvatar } from './AdminAvatar';

export const AdminDetails = ({ admin: { id, email, firstName, lastName, imageLink } }) => {
    
    return (
        <>
            
            <form>
            <AdminAvatar  avatarLink={imageLink}/>
           
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input  type="text" value={email || ""} placeholder="email" readOnly={true} className="input input-primary input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First name</span>
                    </label>
                    <input  type="text" value={firstName || ""} placeholder="email" readOnly={true} className="input input-primary input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last name</span>
                    </label>
                    <input  type="text" value={lastName || ""} placeholder="email" readOnly={true} className="input input-primary input-bordered" />
                </div>
            </form>

        </>
    )
};
