



export const basketReducer = (state, action) => {


    switch (action.type) {

        case 'GET_BASKETS':
            return {
                ...state,
                baskets: action.payload,
                loading: false
            }
        case 'GET_BASKET':
            return {
                ...state,
                basket: action.payload,
                loading: false
            }
        case 'GET_BASKET_ID':
            return {

                ...state,
                basketId: action.payload,
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