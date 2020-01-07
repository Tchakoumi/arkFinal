import firebase from 'firebase/app'

export const createCategoryBrand=(categoryBrand)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('categoryBrand').doc(categoryBrand.idCategoryBrand).set({...categoryBrand})
        .then(() =>{
            dispatch({type:'CREATE_CATEGORY_BRAND', payload:categoryBrand });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CATEGORY_BRAND_ERROR', err });
        })
    }
};
