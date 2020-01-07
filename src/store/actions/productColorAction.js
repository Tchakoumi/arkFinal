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
