import { React, useEffect, useState } from 'react'
import { editCategory } from "../../Context/Category/CategoryActions";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";




export const EditCategoryForm = ({ category }) => {


    const [cookies] = useCookies();

    const [name, setName] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [description, setDescription] = useState("")

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });


    useEffect(() => {


        setName(category.categoryName)
        setThumbnail(category.thumbnail)
        setDescription(category.description)
        setCategoryId(category.id)


    }, [category])





    const onSubmit = (data) => {



        const category = {
            id: categoryId,
            categoryName: name,
            description: description,
            thumbnail: thumbnail,

        }


        const editCategoryAction = async () => {

            await editCategory(category, cookies.token)
            navigate("/categorylist", { replace: true });
        }
        editCategoryAction()
       



    }

    return (

        <>


            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category Name</span>
                    </label>
                    <input type="text" placeholder="Name" {...register("name", { required: true, minLength: 2, maxLength: 250 })} defaultValue={name} onChange={(e) => (setName(e.target.value))} className="input input-bordered input-primary" />
                    {errors.name && errors.name.type === "required" && <span>The name is required</span>}
                    {errors.name && errors.name.type === "minLength" && <span>The name must be at least 2 characters</span>}
                    {errors.name && errors.name.type === "maxLength" && <span>The name can not exceed 250 characters</span>}
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", { required: true, minLength: 5, maxLength: 700 })} defaultValue={description} onChange={(e) => (setDescription(e.target.value))} className="textarea h-24 textarea-bordered textarea-primary" placeholder="Description"></textarea>
                    {errors.description && errors.description.type === "required" && <span>The description is required</span>}
                    {errors.description && errors.description.type === "minLength" && <span>The description must be at least 5 characters</span>}
                    {errors.description && errors.description.type === "maxLength" && <span>The description must not exceed 700 characters</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Thumbnail Link</span>
                    </label>
                    <input {...register("thumbnail", { required: true, minLength: 5, maxLength: 200 })} defaultValue={thumbnail} onChange={(e) => (setThumbnail(e.target.value))} type="text" placeholder="Thumbnail" className="input input-bordered input-primary" />
                    {errors.thumbnail && errors.thumbnail.type === "required" && <span>The thumbnail link is required</span>}
                    {errors.thumbnail && errors.thumbnail.type === "minLength" && <span>The thumbnail link must be at least 5 characters</span>}
                    {errors.thumbnail && errors.thumbnail.type === "maxLength" && <span>The thumbnail link must not exceed 200 characters</span>}
                </div>
                <br />
                <button type="submit" style={{ "float": "right" }} className="btn  btn-lg btn-primary">Confirm Edit</button>


            </form>

        </>

    )

}



