import { React, useEffect, useState } from 'react'
import { editProduct } from "../../Context/Product/ProductActions";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";




export const EditProductForm = ({ product, categories }) => {


    const [cookies] = useCookies();

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [categoryId, setCategoryId] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [stockRemaining, setStockRemaining] = useState("")
    const [description, setDescription] = useState("")
    const [productId, setProductId] = useState("")
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            checkbox: false,
          }
    });


    useEffect(() => {

        setName(product.productName)
        setPrice(product.price)
        setImageLink(product.imageLink)
        setDescription(product.description)
        setStockRemaining(product.stockRemaining)
        setProductId(product.id)
        setCategoryId(product.categoryId)


    }, [product])





    const onSubmit = (data) => {
        
       
        
        const product = {
            id: productId,
            productName: name,
            price: price,
            stockRemaining: stockRemaining,
            description: description,
            imageLink: imageLink,
            categoryId: categoryId
        }

        
        const editProductAction = async () => {

            await editProduct(product, cookies.token)
            navigate("/productlist", { replace: true });
        }
        editProductAction()




    }

    return (

        <>


            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" value={product.id} />
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select className="select select-bordered select-primary w-full max-w-xs" value={categoryId} onChange={(e) => (setCategoryId(e.target.value))}>

                        <option disabled="disabled" >Select</option>
                        {
                            categories.map((category) =>
                            (


                                <option key={category.id} value={category.id}>{category.categoryName}</option>

                            ))
                        }

                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" placeholder="Name" {...register("name", { required: true, minLength: 2, maxLength: 250 })} defaultValue={product.productName} onChange={(e) => (setName(e.target.value))} className="input input-bordered input-primary" />
                    {errors.name && errors.name.type === "required" && <span>The name is required</span>}
                    {errors.name && errors.name.type === "minLength" && <span>The name must be at least 2 characters</span>}
                    {errors.name && errors.name.type === "maxLength" && <span>The name can not exceed 250 characters</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" {...register("price", { required: true,  min: 0 })} defaultValue={product.price} onChange={(e) => (setPrice(e.target.value))} placeholder="Price" className="input input-bordered input-primary" />
                    {errors.price && errors.price.type === "required" && <span>The price is required</span>}
                    {errors.price && errors.price.type === "min" && <span>The Price can not be negative</span>}
                 
                </div>
              
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", { required: true, minLength: 5, maxLength: 700 })} defaultValue={product.description} onChange={(e) => (setDescription(e.target.value))} className="textarea h-24 textarea-bordered textarea-primary" placeholder="Description"></textarea>
                    {errors.description && errors.description.type === "required" && <span>The description is required</span>}
                    {errors.description && errors.description.type === "minLength" && <span>The description must be at least 5 characters</span>}
                    {errors.description && errors.description.type === "maxLength" && <span>The description must not exceed 700 characters</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock Remaining</span>
                    </label>
                    <input {...register("stockRemaining", { required: true, min: 0 })} defaultValue={product.stockRemaining} onChange={(e) => (setStockRemaining(e.target.value))} type="number" placeholder="Stock Remaining" className="input input-bordered input-primary" />
                    {errors.stockRemaining && errors.stockRemaining.type === "required" && <span>Stock remaining is required</span>}
                    {errors.stockRemaining && errors.stockRemaining.type === "min" && <span>The stock remaining can not be negative</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image Link</span>
                    </label>
                    <input {...register("imageLink", { required: true, minLength: 5, maxLength: 200 })} defaultValue={product.imageLink} onChange={(e) => (setImageLink(e.target.value))} type="text" placeholder="Image Link" className="input input-bordered input-primary" />
                    {errors.imageLink && errors.imageLink.type === "required" && <span>The image link is required</span>}
                    {errors.imageLink && errors.imageLink.type === "minLength" && <span>The image link must be at least 5 characters</span>}
                    {errors.imageLink && errors.imageLink.type === "maxLength" && <span>The image link must not exceed 200 characters</span>}
                </div>
                <br />
                <button type="submit" style={{ "float": "right" }} className="btn  btn-lg btn-primary">Confirm Edit</button>


            </form>

        </>

    )

}



