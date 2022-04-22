import axios from "axios";
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const WEBAPI_KEY = process.env.REACT_APP_WEBAPI_KEY;
const WEBAPI_URL = process.env.REACT_APP_WEBAPI_URL;


const apiCategories = axios.create({

  headers: {
    Accept: "application/json",
    ApiKey: WEBAPI_KEY

  }
})

//Get all number of categories
export const GetCategories = async () => {


  const response = await apiCategories.get(`${WEBAPI_URL}/categories`)


  return response.data


}
//Get a category
export const GetCategory = async (categoryId) => {

  const params = categoryId;
  const response = await apiCategories.get(`${WEBAPI_URL}/categories/${params}`)


  return response.data


}
//Get a specififed number of categories
export const GetNCategories = async (numberOfCategories) => {

  const params = numberOfCategories;
  const response = await apiCategories.get(`${WEBAPI_URL}/categories/getn/${params}`)


  return response.data


}



//Create a category
export const CreateCategory = async (category, adminToken) => {

  const apiCategoriesProtected = axios.create({

    headers: {
      Accept: "application/json",
      Authorization: 'Bearer ' + adminToken


    }
  })



  const response = await apiCategoriesProtected.post(`${WEBAPI_URL}/categories`, {

    categoryName: category.categoryName,
    description: category.description,
    thumbnail: category.thumbnail,

  })


  return response.data


}



//Edit Category

export const editCategory = async (category, adminToken) => {


  const apiCategoriesProtected = axios.create({

    headers: {
      Accept: "application/json",
      Authorization: 'Bearer ' + adminToken


    }
  })

  const params = category.id;

  const response = await apiCategoriesProtected.put(`${WEBAPI_URL}/categories/${params}`, {

    categoryName: category.categoryName,
    id: category.id,
    description: category.description,
    thumbnail: category.thumbnail
  })


  return response.data


}



//Remove category
export const DeleteCategory = async (categoryId, adminToken) => {
    
  const apiCatagoriesProtected = axios.create({

      headers: {
          Accept: "application/json",
          Authorization: 'Bearer ' + adminToken


      }
  })

  const params = categoryId;
 await apiCatagoriesProtected.delete(`${WEBAPI_URL}/categories/${params}`)
  
 


}



//Search categories
export const SearchCategories = async (text) => {


  const params = text;
  const response = await apiCategories.get(`${WEBAPI_URL}/categories/getbyname/${params}`)
  return response.data


}

