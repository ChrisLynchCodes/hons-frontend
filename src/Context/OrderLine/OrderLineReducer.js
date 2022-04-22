



export const orderLineReducer = (state, action) => {


    switch (action.type) {

        case 'GET_ORDERLINES':
            return {
                ...state,
                orderLines: action.payload,
                loading: false
            }
        case 'GET_ORDERLINE':
            return {
                ...state,
                orderLine: action.payload,
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