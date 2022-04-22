import { React } from 'react'
import { useLocation } from "react-router-dom";
import { EditAddressForm } from '../../Components/Addresses/EditAddressForm'
import { Link, useNavigate} from "react-router-dom";
import {DeleteAddress} from '../../Context/Address/AddressActions'
import { useCookies } from "react-cookie";







export const EditAddressPage = () => {

  const [cookies] = useCookies();
  const location = useLocation();
  const { addressToEdit } = location.state;

  let navigate = useNavigate();



const handleClick = async ()=>{
  
  await DeleteAddress(cookies.id, cookies.token, addressToEdit.id)
  navigate("/customeraddreslist", { replace: true });
}







  return (


    <div className='grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3 mt-10 self-center'>
      <div><Link className="btn btn-outline btn-lg" to='/customeraddreslist'>Go back</Link></div>
      <EditAddressForm address={addressToEdit} />
     
     <div className='justify-self-end'>
     


     {/* <!-- The button to open modal --> */}
<label htmlFor="remove-address-modal" className="btn modal-button btn-outline btn-error">Remove Address</label>

<input type="checkbox" id="remove-address-modal" className="modal-toggle"/>
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">This will be permanent. Are you sure?</h3>
    
    <div className="modal-action">
    <label htmlFor="remove-address-modal" className="btn btn-primary">Cancel</label>
      <button htmlFor="remove-address-modal" onClick={()=>(handleClick())} className="btn btn-error">Remove</button>
    </div>
    
  </div>
</div>


      
     </div>
    
    </div>



  )
}

// {/* <button onClick={() => handleClick()} className="btn  btn-lg btn-error" >
//                             Remove Address
//                         </button> */}