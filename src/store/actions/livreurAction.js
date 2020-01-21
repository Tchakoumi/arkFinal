import firebase from 'firebase/app'

export const createLivreur=(livreur)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('livreur').doc(livreur.idLivreur).set({...livreur})
        .then(() =>{
            dispatch({type:'CREATE_LIVREUR', payload:livreur });
        }).catch((err) => {
            dispatch({ type: 'CREATE_LIVREUR_ERROR', err });
        })
    }
};

export const readLivreur=((dispatch)=>{
    firebase.firestore().collection('livreur').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_LIVREUR', payload:data})
    }).catch(err=>dispatch({type:'READ_LIVREUR_ERROR', err}))
})



export const deleteLivreur=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('livreur').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_LIVREUR'})))
        .catch(err=>dispatch({type:'DELETE_LIVREUR_ERROR', err}))
    }
}

export const updateLivreur=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('livreur').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_LIVREUR', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_LIVREUR_ERROR', err}))
    }
}