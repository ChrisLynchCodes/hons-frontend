import React from 'react';

import { Home } from '../../Components/Home/Home';

import UWSSurvivalGearLogo from '../../images/UWS Survival Gear.png'
export const HomePage = () => {
  return(
   
   <div className='pt-4'>
      <div className='grid grid-cols-1 gap-8  md:grid-cols-2 mb-8'>
        <div className='hidden md:block'>
        <img src={UWSSurvivalGearLogo} alt='site-logo' className="max-w-100  h-auto "/>
        
           
        </div>
        <div>
        <p className='text-center pt-10 mx-auto  text-4xl'>Welcome to UWS Survival Gear.</p>
        <br/>
        <p className='text-center mx-auto font-extralight  text-3xl'>Providing the best in locally sourced high quality survival equipment. </p>
        <br/>
        <p className='text-center mx-auto font-extralight  text-2xl'>Including but not limited to. Clothing & Footwear, Tents, Survival Equipment, Sleeping Bags, Sleeping Matts, and Cooking Equipment.</p>
       </div>
     
     
       
      </div>
     
      <Home />
    </div>
  )
};
