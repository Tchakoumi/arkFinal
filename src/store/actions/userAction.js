import firebase from 'firebase/app'

export const createUser=(user)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('user').doc(user.idUser).set({...user})
        .then(() =>{
            dispatch({type:'CREATE_USER', payload:user });
        }).catch((err) => {
            dispatch({ type: 'CREATE_USER_ERROR', err });
        })
    }
};

export const readUser=((dispatch)=>{
    firebase.firestore().collection('user').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_USER', payload:data})
    }).catch(err=>dispatch({type:'READ_USER_ERROR', err}))
})



export const deleteUser=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('user').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_USER'})))
        .catch(err=>dispatch({type:'DELETE_USER_ERROR', err}))
    }
}

export const updateUser=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('user').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_USER', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_USER_ERROR', err}))
    }
}