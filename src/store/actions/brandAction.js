import firebase from 'firebase/app'

export const createBrand=(brand)=>{
    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('brand').doc(brand.idBrand).set({...brand})
        .then((dispatch({type:'CREATE_BRAND', payload:brand })))
        .catch(err=>dispatch({ type: 'CREATE_BRAND_ERROR', err }))
    }
};

export const readBrand=((dispatch)=>{
    firebase.firestore().collection('brand').get()
    .then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_BRAND', payload:data})
    }).catch(err=>dispatch({type:'READ_BRAND_ERROR', err}))
})



export const deleteBrand=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('brand').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_BRAND'})))
        .catch(err=>dispatch({type:'DELETE_BRAND_ERROR', err}))
    }
}

export const updateBrand=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('brand').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_BRAND', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_BRAND_ERROR', err}))
    }
}
