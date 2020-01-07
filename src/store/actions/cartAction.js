import firebase from 'firebase/app'

export const createCart=(cart)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('cart').doc(cart.idCart).set({...cart})
        .then(() =>{
            dispatch({type:'CREATE_CART', payload:cart });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CART_ERROR', err });
        })
    }
};
