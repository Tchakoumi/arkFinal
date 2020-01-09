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

export const readCategoryBrand=((dispatch)=>{
    firebase.firestore().collection('categoryBrand').get()
    .then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_CATEGORY_BRAND', payload:data})
    }).catch(err=>dispatch({type:'READ_CATEGORY_BRAND_ERROR', err}))
})



export const deleteCategoryBrand=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('categoryBrand').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_CATEGORY_BRAND'})))
        .catch(err=>dispatch({type:'DELETE_CATEGORY_BRAND_ERROR', err}))
    }
}

export const updateCategoryBrand=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('categoryBrand').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_CATEGORY_BRAND', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_CATEGORY_BRAND_ERROR', err}))
    }
}