import firebase from 'firebase/app'

export const createQuarter=(quarter)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('quarter').doc(quarter.idQuarter).set({...quarter})
        .then(() =>{
            dispatch({type:'CREATE_QUARTER', payload:quarter });
        }).catch((err) => {
            dispatch({ type: 'CREATE_QUARTER_ERROR', err });
        })
    }
};

export const readQuarter=((dispatch)=>{
    firebase.firestore().collection('quarter').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'DELETE_QUARTER', payload:data})
    }).catch(err=>dispatch({type:'DELETE_QUARTER_ERROR', err}))
})



export const deleteQuarter=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('quarter').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_QUARTER'})))
        .catch(err=>dispatch({type:'DELETE_QUARTER_ERROR', err}))
    }
}

export const updateQuarter=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('quarter').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_QUARTER', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_QUARTER_ERROR', err}))
    }
}