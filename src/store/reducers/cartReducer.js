const initState={
    carts:[
        {deleted:false, idProduct:"iAeK3H26QANXqT5WHmmB", idProductSize:"0rNGegfRcstJMDVIPvUp", idUser:"hEEI5d8zp6rkoLAdiXdP", quantity:1},
    ]
}

const cartReducer=(state=initState, action)=>{
    switch(action.type){
        case 'CREATE_CART':
            return{...state, carts:[...state.carts, ...action.payload]}
        default:
            return state
    }
}

export default cartReducer;
