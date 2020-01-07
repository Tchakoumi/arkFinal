import firebase from 'firebase/app'

export const createBrand=(brand)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('brand').doc(brand.idBrand).set({...brand})
        .then(() =>{
            dispatch({type:'CREATE_BRAND', payload:brand });
        }).catch((err) => {
            dispatch({ type: 'CREATE_BRAND_ERROR', err });
        })
    }
};
