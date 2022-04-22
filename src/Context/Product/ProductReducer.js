
export const productReducer = (state, action) => {


    switch (action.type) {

        case 'GET_PRODUCTS':
            return {

                ...state,
                products: action.payload,
                loading: false
            }
        case 'GET_PRODUCT':
            return {

                ...state,
                product: action.payload,
                loading: false
            }
      
        case 'GET_PRODUCT_ID':
            return {

                ...state,
                productId: action.payload,
                loading: false
            }

            case 'CLEAR_PRODUCTS':
                return {
                    ...state,
                    products: [],
                    loading: false
                }

        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }


        default:
            return state;
    }
}