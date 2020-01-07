import firebase from 'firebase/app'

export const createOrder=(order)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('order').doc(order.idOrder).set({...order})
        .then(() =>{
            dispatch({type:'CREATE_ORDER', payload:order });
        }).catch((err) => {
            dispatch({ type: 'CREATE_ORDER_ERROR', err });
        })
    }
};
