
export const addressReducer = (state, action) => {


    switch (action.type) {

        case 'GET_ADDRESSES':
            return {

                ...state,
                addresses: action.payload,
                loading: false
            }
            case 'GET_ADDRESS':
                return {
    
                    ...state,
                    address: action.payload,
                    loading: false
                }
       
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_':
            return {
                ...state,
                addresses: [],
                loading: false
            }
          
        default:
            return state;
    }
}