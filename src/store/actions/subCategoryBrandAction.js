import firebase from 'firebase/app'

export const createSubCategoryBrand=(subCategoryBrand)=>{
    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('subCategoryBrand').doc(subCategoryBrand.idSubCategoryBrand).set({...subCategoryBrand})
        .then((dispatch({type:'CREATE_SUB_CATEGORY_BRAND', payload:subCategoryBrand })))
        .catch(err=>dispatch({ type: 'CREATE_SUB_CATEGORY_BRAND_ERROR', err }))
    }
};

export const readSubCategoryBrand=((dispatch)=>{
    firebase.firestore().collection('subCategoryBrand').get()
    .then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_SUB_CATEGORY_BRAND', payload:data})
    }).catch(err=>dispatch({type:'READ_SUB_CATEGORY_BRAND_ERROR', err}))
})



export const deleteSubCategoryBrand=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('subCategoryBrand').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_SUB_CATEGORY_BRAND'})))
        .catch(err=>dispatch({type:'DELETE_SUB_CATEGORY_BRAND_ERROR', err}))
    }
}

export const updateSubCategoryBrand=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('subCategoryBrand').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_SUB_CATEGORY_BRAND', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_SUB_CATEGORY_BRAND_ERROR', err}))
    }
}
