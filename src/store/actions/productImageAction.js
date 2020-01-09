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
