import firebase from 'firebase/app'

export const createCoupon=(coupon)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('coupon').doc(coupon.idCoupon).set({...coupon})
        .then(() =>{
            dispatch({type:'CREATE_COUPON', payload:coupon });
        }).catch((err) => {
            dispatch({ type: 'CREATE_COUPON_ERROR', err });
        })
    }
};
