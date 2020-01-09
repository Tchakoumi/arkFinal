import firebase from 'firebase/app'

export const createProductColor=(productColor)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('productColor').doc(productColor.idProductColor).set({...productColor})
        .then(() =>{
            dispatch({type:'CREATE_PRODUCT_COLOR', payload:productColor });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PRODUCT_COLOR_ERROR', err });
        })
    }
};

export const readProductColor=((dispatch)=>{
    firebase.firestore().collection('productColor').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_PRODUCT_COLOR', payload:data})
    }).catch(err=>dispatch({type:'READ_PRODUCT_COLOR_ERROR', err}))
})



export const deleteProductColor=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('productColor').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_PRODUCT_COLOR'})))
        .catch(err=>dispatch({type:'DELETE_PRODUCT_COLOR_ERROR', err}))
    }
}

export const updateProductColor=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('productColor').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_PRODUCT_COLOR', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_PRODUCT_COLOR_ERROR', err}))
    }
}