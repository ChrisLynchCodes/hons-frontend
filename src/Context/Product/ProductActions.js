import axios from "axios";
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const WEBAPI_KEY = process.env.REACT_APP_WEBAPI_KEY;
const WEBAPI_URL = process.env.REACT_APP_WEBAPI_URL;


const apiProducts = axios.create({

    headers: {
        Accept: "application/json",
        ApiKey: WEBAPI_KEY

    }
})


export const GetNProducts = async (numberOfProducts) => {

    //params
    // const params = new URLSearchParams({
    //     q: text
    // })

    const params = numberOfProducts;
    const response = await apiProducts.get(`${WEBAPI_URL}/products/getn/${params}`)


    return response.data


}

export const GetProducts = async () => {



    const response = await apiProducts.get(`${WEBAPI_URL}/products`)


    return response.data


}
export const GetProductsByCategory = async (catgoryId) => {

    const params = catgoryId;

    const response = await apiProducts.get(`${WEBAPI_URL}/products/getproductsbycategory/${params}`)


    return response.data


}
export const GetManyProductsById = async (productIds, token) => {




    const response = await apiProducts.post(`${WEBAPI_URL}/products/GetManyProductsByIdAsync`, {

        productIds: productIds
    })


    return response.data


}
export const GetProduct = async (productId) => {



    const response = await apiProducts.get(`${WEBAPI_URL}/products/${productId}`)


    return response.data


}


//Search products
export const SearchProducts = async (text) => {

    const params = text;
    const response = await apiProducts.get(`${WEBAPI_URL}/products/search/${params}`)
    return response.data


}
export const CreateProduct = async (product, adminToken) => {

    const apiProductsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + adminToken


        }
    })



    const response = await apiProductsProtected.post(`${WEBAPI_URL}/products`, {

        productName: product.productName,
        price: product.price,
        categoryId: product.categoryId,
        description: product.description,
        stockRemaining: product.stockAmmount,
        imageLink: product.imageLink
    })


    return response.data


}

//Edit product
export const editProduct = async (product, adminToken) => {


    const apiProductsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + adminToken


        }
    })

    const params = product.id;


    // const priceNumber = Number(product.price.substring(1));

    const response = await apiProductsProtected.put(`${WEBAPI_URL}/products/${params}`, {

        productName: product.productName,
        price: product.price,
        categoryId: product.categoryId,
        description: product.description,
        stockRemaining: product.stockRemaining,
        imageLink: product.imageLink
    })


    return response.data


}
//Remove product
export const DeleteProduct = async (productId, adminToken) => {

    const apiProductsProtected = axios.create({

        headers: {
            Accept: "application/json",
            Authorization: 'Bearer ' + adminToken


        }
    })

    const params = productId;
    const response = await apiProductsProtected.delete(`${WEBAPI_URL}/products/${params}`)

    return response.data


}
