import firebase from 'firebase/app'

export const createProductSize=(productSize)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('productSize').doc(productSize.idProductSize).set({...productSize})
        .then(() =>{
            dispatch({type:'CREATE_PRODUCT_SIZE', payload:productSize });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PRODUCT_SIZE_ERROR', err });
        })
    }
};

export const readProductSize=((dispatch)=>{
    firebase.firestore().collection('productSize').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_PRODUCT_SIZE', payload:data})
    }).catch(err=>dispatch({type:'READ_PRODUCT_SIZE_ERROR', err}))
})



export const deleteProductSize=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('productSize').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_PRODUCT_SIZE'})))
        .catch(err=>dispatch({type:'DELETE_PRODUCT_SIZE_ERROR', err}))
    }
}

export const updateProductSize=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('productSize').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_PRODUCT_SIZE', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_PRODUCT_SIZE_ERROR', err}))
    }
}