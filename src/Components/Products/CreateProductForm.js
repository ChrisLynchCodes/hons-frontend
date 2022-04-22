
import { useForm } from "react-hook-form";
import { React, useContext, useEffect, useState } from 'react'
import { CreateProduct } from "../../Context/Product/ProductActions"
import { useCookies } from "react-cookie";
import CategoryContext from "../../Context/Category/CategoryContext";
import { GetCategories } from "../../Context/Category/CategoryActions";
import { useNavigate } from "react-router-dom";




export const CreateProductForm = () => {




  const { categories, categoryDispatch } = useContext(CategoryContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [cookies] = useCookies();

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [categoryId, setCategoryId] = useState("")
  const [imageLink, setImageLink] = useState("")
  const [stockAmmount, setStockAmmount] = useState("")
  const [description, setDescription] = useState("")


  let navigate = useNavigate();

  useEffect(() => {

    //set loading
    categoryDispatch({ type: 'SET_LOADING' })

    //define getCategories
    const getCategories = async () => {
      const categories = await GetCategories()
      categoryDispatch({ type: 'GET_CATEGORIES', payload: categories })

    }
    //call getCategories
    getCategories()


  }, [categoryDispatch])



  const onSubmit = async (event) => {


    const product = {

      productName: name,
      price: price,
      stockAmmount: stockAmmount,
      description: description,
      imageLink: imageLink,
      categoryId: categoryId
    }



    const createProductAction = async () => {

      await CreateProduct(product, cookies.token)

      navigate("/productlist", { replace: true });
    }
    createProductAction()



  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <select class="select select-bordered select-primary w-full max-w-xs" onChange={(e) => (setCategoryId(e.target.value))}>

          <option disabled="disabled" selected="selected">Choose the product category</option>
          {
            categories.map((category) =>
            (


              <option value={category.id}>{category.categoryName}</option>

            ))
          }

        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Product name</span>
        </label>
        <input {...register('name', { required: true, minLength: 2, maxLength: 250 })} type="text" placeholder="Product name" className="input input-primary" onChange={(e) => (setName(e.target.value))} />
        {errors.name && errors.name.type === "required" && <span>The name is required</span>}
        {errors.name && errors.name.type === "minLength" && <span>The name must be at least 2 characters</span>}
        {errors.name && errors.name.type === "maxLength" && <span>The name can not exceed 250 characters</span>}
      </div>


      <div className="form-control">
        <label className="label">
          <span className="label-text">Product price</span>
        </label>
        <input {...register('price', { required: true, min: 0 })} type="text" placeholder="£" className="input input-primary" onChange={(e) => (setPrice(e.target.value))} />
        {errors.price && errors.price.type === "required" && <span>The price is required</span>}
        {errors.price && errors.price.type === "min" && <span>The Price can not be negative</span>}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Product description</span>
        </label>

        <textarea {...register('description', { required: true, minLength: 5, maxLength: 700 })} className="textarea h-24 textarea-bordered textarea-primary" placeholder="product description" onChange={(e) => (setDescription(e.target.value))}></textarea>
        {errors.description && errors.description.type === "required" && <span>The description is required</span>}
        {errors.description && errors.description.type === "minLength" && <span>The description must be at least 5 characters</span>}
        {errors.description && errors.description.type === "maxLength" && <span>The description must not exceed 700 characters</span>}
      </div>



      <div className="form-control">
        <label className="label">
          <span className="label-text">Stock ammount</span>
        </label>
        <input {...register('stockAmmount', { required: true, min: 0 })} type="number" placeholder="stock ammount" className="input input-primary" onChange={(e) => (setStockAmmount(e.target.value))} />
        {errors.stockAmmount && errors.stockAmmount.type === "required" && <span>Stock ammount is required</span>}
        {errors.stockAmmount && errors.stockAmmount.type === "min" && <span>The stock ammount can not be negative</span>}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Product image link</span>
        </label>
        <input {...register('imageLink', { required: true, minLength: 5, maxLength: 200 })} type="text" placeholder="product image link" className="input input-primary" onChange={(e) => (setImageLink(e.target.value))} />
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
