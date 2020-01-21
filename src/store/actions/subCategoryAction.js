import firebase from 'firebase/app'

export const createSubCategory=(subCategory)=>{
    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('subCategory').doc(subCategory.idSubCategory).set({...subCategory})
        .then((dispatch({type:'CREATE_SUB_CATEGORY', payload:subCategory })))
        .catch(err=>dispatch({ type: 'CREATE_SUB_CATEGORY_ERROR', err }))
    }
};

export const readSubCategory=((dispatch)=>{
    firebase.firestore().collection('subCategory').get()
    .then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_SUB_CATEGORY', payload:data})
    }).catch(err=>dispatch({type:'READ_SUB_CATEGORY_ERROR', err}))
})



export const deleteSubCategory=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('subCategory').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_SUB_CATEGORY'})))
        .catch(err=>dispatch({type:'DELETE_SUB_CATEGORY_ERROR', err}))
    }
}

export const updateSubCategory=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('subCategory').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_SUB_CATEGORY', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_SUB_CATEGORY_ERROR', err}))
    }
}
