
export const adminReducer = (state, action) => {


    switch (action.type) {

        case 'GET_ADMINS':
            return {

                ...state,
                admins: action.payload,
                loading: false
            }
            case 'GET_ADMIN':
                return {
    
                    ...state,
                    admin: action.payload,
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
                admins: [],
                loading: false
            }
          
        default:
            return state;
    }
}