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
