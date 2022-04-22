import React from 'react';

export const CustomerAvatar = ({avatarLink}) => {
  return (

<div className="avatar align-center">
  <div className="mb-8 mt-8 rounded-box w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={avatarLink} alt="customer-avatar"/>
  </div>
</div> 

  )
};
