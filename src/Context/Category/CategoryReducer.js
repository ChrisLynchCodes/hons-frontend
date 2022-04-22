
export const categoryReducer = (state, action) => {


    switch (action.type) {

        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
            case 'GET_CATEGORY':
            return {
                ...state,
                category: action.payload,
                loading: false
            }
            case 'GET_CATEGORY_ID':
                return {
    
                    ...state,
                    productId: action.payload,
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