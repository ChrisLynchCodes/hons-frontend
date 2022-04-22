import React from 'react';
import { GiMountains } from "react-icons/gi";

export const AboutPage = () => {
  return (





   
    // </div>
<div className="flex mt-5">
  <div className="flex-auto self-start">

  </div>
  <div className="flex-auto">

 {/* Desktop stat  */}
  <div className="stats hidden md:inline-grid shadow text-cente  margin-auto ">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Established</div>
    <div className="stat-value text-primary">1988</div>
    <div className="stat-desc">July 9th 1988</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Sustainability</div>
    <div className="stat-value text-accent">98%</div>
    <div className="stat-desc">Aims to shift to 100% sustainable suppliers by 2025</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://i.imgur.com/QRaXa0J.png" alt='number 3' />
        </div>
      </div>
    </div>
    <div className="stat-value">Voted No 3</div>
    <div className="stat-title">In UK survival magazine 2022</div>
    <div className=" text-secondary">↗︎ 6 (15%) up since last year</div>
  </div>
  
</div>

<div className='grid grid-cols-2 '>
<div className="justify-self-start card w-96 bg-base-100 shadow-xl image-full mt-5">
  <figure><img src="https://i.imgur.com/76nXna8.jpg" alt="Shoes" /></figure>
  
  <div className="card-body">

  <GiMountains size="50px"/>
    <p className="card-title">Family Run Company </p>
  
 
    <p>Established in 1988, a family run company providing survivalists and outdoorsmen with quality equipment with a focus on environmentally friendly business practices and sustainability </p>
    <div className="card-actions justify-end">

    </div>
  </div>
 
</div>
 
{/* <div className="card w-96 bg-base-100 shadow-xl mt-5">
        <div className="card-body">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h2 className="card-title">About us</h2>

          <p>We are a family run company established in 1988.</p>
    
        </div>
      </div>  */}



</div>


  </div>
  
  {/* <div className="flex-auto self-end">
  <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  </div> */}
</div>


  )
};
