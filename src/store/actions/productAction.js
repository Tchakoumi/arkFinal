import firebase from 'firebase/app'

export const createProduct=(product)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('product').doc(product.idProduct).set({...product})
        .then(() =>{
            dispatch({type:'CREATE_PRODUCT', payload:product });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PRODUCT_ERROR', err });
        })
    }
};

export const readProduct=((dispatch)=>{
    firebase.firestore().collection('product').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_PRODUCT', payload:data})
    }).catch(err=>dispatch({type:'READ_PRODUCT_ERROR', err}))
})



export const deleteProduct=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('product').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_PRODUCT'})))
        .catch(err=>dispatch({type:'DELETE_PRODUCT_ERROR', err}))
    }
}

export const updateProduct=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('product').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_PRODUCT', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_PRODUCT_ERROR', err}))
    }
}