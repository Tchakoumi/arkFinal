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

export const readOrder=((dispatch)=>{
    firebase.firestore().collection('order').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_ORDER', payload:data})
    }).catch(err=>dispatch({type:'READ_ORDER_ERROR', err}))
})



export const deleteOrder=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('order').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_ORDER'})))
        .catch(err=>dispatch({type:'DELETE_ORDER_ERROR', err}))
    }
}

export const updateOrder=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('order').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_ORDER', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_ORDER_ERROR', err}))
    }
}