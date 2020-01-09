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

export const readCategory=((dispatch)=>{
    firebase.firestore().collection('category').get()
    .then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_CATEGORY', payload:data})
    }).catch(err=>dispatch({type:'READ_CATEGORY_ERROR', err}))
})



export const deleteCategory=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('category').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_CATEGORY'})))
        .catch(err=>dispatch({type:'DELETE_CATEGORY_ERROR', err}))
    }
}

export const updateCategory=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('category').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_CATEGORY', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_CATEGORY_ERROR', err}))
    }
}