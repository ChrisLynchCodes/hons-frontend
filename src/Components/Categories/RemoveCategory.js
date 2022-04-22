import { React, useEffect, useContext, useState } from 'react'
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { DeleteCategory } from '../../Context/Category/CategoryActions'
import { WarningAlert } from '../../Components/Layout/WarningAlert'
import { useNavigate } from "react-router-dom";



export const RemoveCategory = ({ category }) => {


    const [cookies] = useCookies();
    const [thumbnail, setThumbnail] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    let navigate = useNavigate();

    
    useEffect(() => {


        setName(category.categoryName)
        setDescription(category.description)
        setThumbnail(category.thumbnail)




    }, [category])




    const handleClick = async () => {

        await DeleteCategory(category.id, cookies.token)
        navigate("/categorylist", { replace: true });
    }

    return (

        <>
            <WarningAlert text="This will be permenant" />
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3 pt-5'>

                <div>
                    <img src={thumbnail} className="mask mask-squircle" alt="product link" />
                </div>

                <div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" placeholder="Category name" value={name} className="input input-bordered w-full max-w-xs" disabled />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>

                        </label>
                        <textarea type="text" placeholder="Category description" value={description} className="input input-bordered w-full max-w-xs text-area" disabled />

                    </div>
                </div>

                <div>
                    <div className="btn-group">
                        <h1 className='pb-3 pl-2'>Are you sure you want to remove the following category?</h1>
                        <button onClick={() => handleClick()} className="btn btn-outline btn-lg btn-primary" >
                            Remove category
                        </button>

                        <Link className="btn btn-outline btn-lg" to='/categorylist'>
                            Cancel
                        </Link>


                    </div>
                </div>



            </div></>

    )

}
