
export const customerReducer = (state, action) => {


    switch (action.type) {

        case 'GET_CUSTOMERS':
            return {

                ...state,
                customers: action.payload,
                loading: false
            }
            case 'GET_CUSTOMER':
                return {
    
                    ...state,
                    customer: action.payload,
                    loading: false
                }
                case 'GET_TOKEN':
                    return {
        
                        ...state,
                        token: action.payload,
                        loading: false
                    }
            case 'CUSTOMER_LOGIN':
                return {
    
                    ...state,
                    customer: action.payload,
                    loading: false
                }
                case 'GET_ROLE':
                    return {
        
                        ...state,
                        role: action.payload,
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
                users: [],
                loading: false
            }
          
        default:
            return state;
    }
}