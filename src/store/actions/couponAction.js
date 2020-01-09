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

export const readCoupon=((dispatch)=>{
    firebase.firestore().collection('coupon').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_COUPON', payload:data})
    }).catch(err=>dispatch({type:'READ_COUPON_ERROR', err}))
})



export const deleteCoupon=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('coupon').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_COUPON'})))
        .catch(err=>dispatch({type:'DELETE_COUPON_ERROR', err}))
    }
}

export const updateCoupon=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('coupon').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_COUPON', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_COUPON_ERROR', err}))
    }
}