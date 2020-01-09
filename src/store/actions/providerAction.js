import firebase from 'firebase/app'

export const createProvider=(provider)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('provider').doc(provider.idProvider).set({...provider})
        .then(() =>{
            dispatch({type:'CREATE_PROVIDER', payload:provider });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROVIDER_ERROR', err });
        })
    }
};

export const readProvider=((dispatch)=>{
    firebase.firestore().collection('provider').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_PROVIDER', payload:data})
    }).catch(err=>dispatch({type:'READ_PROVIDER_ERROR', err}))
})



export const deleteProvider=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('provider').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_PROVIDER'})))
        .catch(err=>dispatch({type:'DELETE_PROVIDER_ERROR', err}))
    }
}

export const updateProvider=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('provider').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_PROVIDER', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_PROVIDER_ERROR', err}))
    }
}