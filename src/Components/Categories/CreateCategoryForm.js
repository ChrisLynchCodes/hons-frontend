
import { useForm } from "react-hook-form";
import { React, useContext, useState } from 'react'
import { CreateCategory } from "../../Context/Category/CategoryActions"
import { useCookies } from "react-cookie";
import CategoryContext from "../../Context/Category/CategoryContext";

import { useNavigate } from "react-router-dom";




export const CreateCategoryForm = () => {





    const { register, handleSubmit, formState: { errors } } = useForm();
    const [cookies] = useCookies();

    const [name, setName] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [description, setDescription] = useState("")



    let navigate = useNavigate();





    const onSubmit = async (event) => {


        const category = {

            categoryName: name,
            description: description,
            thumbnail: thumbnail,
        }

        const createCategoryAction = async () => {

            await CreateCategory(category, cookies.token)

            navigate("/categorylist", { replace: true });
        }
        createCategoryAction()

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>


            <div className="form-control">
                <label className="label">
                    <span className="label-text">Category name</span>
                </label>
                <input {...register('name', { required: true, minLength: 2, maxLength: 250 })} type="text" placeholder="Category name" className="input input-primary" onChange={(e) => (setName(e.target.value))} />
                {errors.name && errors.name.type === "required" && <span>The name is required</span>}
                {errors.name && errors.name.type === "minLength" && <span>The name must be at least 2 characters</span>}
                {errors.name && errors.name.type === "maxLength" && <span>The name can not exceed 250 characters</span>}
            </div>



            <div className="form-control">
                <label className="label">
                    <span className="label-text">Category description</span>
                </label>

                <textarea {...register('description', { required: true, minLength: 5, maxLength: 700 })} className="textarea h-24 textarea-bordered textarea-primary" placeholder="Category description" onChange={(e) => (setDescription(e.target.value))}></textarea>
                {errors.description && errors.description.type === "required" && <span>The description is required</span>}
                {errors.description && errors.description.type === "minLength" && <span>The description must be at least 5 characters</span>}
                {errors.description && errors.description.type === "maxLength" && <span>The description must not exceed 700 characters</span>}
            </div>




            <div className="form-control">
                <label className="label">
                    <span className="label-text">Category image link</span>
                </label>
                <input {...register('imageLink', { required: true, minLength: 5, maxLength: 200 })} type="text" placeholder="Category image link" className="input input-primary" onChange={(e) => (setThumbnail(e.target.value))} />
                {errors.imageLink && errors.imageLink.type === "required" && <span>The image link is required</span>}
                {errors.imageLink && errors.imageLink.type === "minLength" && <span>The image link must be at least 5 characters</span>}
                {errors.imageLink && errors.imageLink.type === "maxLength" && <span>The image link must not exceed 200 characters</span>}
            </div>



            <div className="form-control mt-6">
                <input value="Create" type='submit' className="btn btn-accent" />
            </div>
        </form>


    )

}


    //, pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})/
