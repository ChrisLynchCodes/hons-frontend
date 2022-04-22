        



export const orderReducer = (state, action) => {


    switch (action.type) {

        case 'GET_ORDERS':
            return {
                ...state,
                orders: action.payload,
                loading: false
            }
        case 'GET_ORDER':
            return {
                ...state,
                order: action.payload,
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