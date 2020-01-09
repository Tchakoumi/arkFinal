import firebase from 'firebase/app'

export const createMessage=(message)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('message').doc(message.idMessage).set({...message})
        .then(() =>{
            dispatch({type:'CREATE_MESSAGE', payload:message });
        }).catch((err) => {
            dispatch({ type: 'CREATE_MESSAGE_ERROR', err });
        })
    }
};

export const readMessage=((dispatch)=>{
    firebase.firestore().collection('message').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_MESSAGE', payload:data})
    }).catch(err=>dispatch({type:'READ_MESSAGE_ERROR', err}))
})



export const deleteMessage=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('message').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_MESSAGE'})))
        .catch(err=>dispatch({type:'DELETE_MESSAGE_ERROR', err}))
    }
}

export const updateMessage=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('message').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_MESSAGE', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_MESSAGE_ERROR', err}))
    }
}