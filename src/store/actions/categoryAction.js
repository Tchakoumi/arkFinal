import firebase from 'firebase/app'

export const createCategory=(category)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('category').doc(category.idCategory).set({...category})
        .then(() =>{
            dispatch({type:'CREATE_CATEGORY', payload:category });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CATEGORY_ERROR', err });
        })
    }
};
