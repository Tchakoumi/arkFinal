import firebase from 'firebase/app'

export const createProductImage=(productImage)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('productImage').doc(productImage.idProductImage).set({...productImage})
        .then(() =>{
            dispatch({type:'CREATE_PRODUCT_IMAGE', payload:productImage });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PRODUCT_IMAGE_ERROR', err });
        })
    }
};

export const readProductImage=((dispatch)=>{
    firebase.firestore().collection('productImage').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_PRODUCT_IMAGE', payload:data})
    }).catch(err=>dispatch({type:'READ_PRODUCT_IMAGE_ERROR', err}))
})



export const deleteProductImage=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('productImage').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_PRODUCT_IMAGE'})))
        .catch(err=>dispatch({type:'DELETE_PRODUCT_IMAGE_ERROR', err}))
    }
}

export const updateProductImage=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('productImage').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_PRODUCT_IMAGE', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_PRODUCT_IMAGE_ERROR', err}))
    }
}