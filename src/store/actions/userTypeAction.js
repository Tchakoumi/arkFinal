import firebase from 'firebase/app'

export const createUserType=(userType)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('userType').doc(userType.idUserType).set({...userType})
        .then(() =>{
            dispatch({type:'CREATE_USER_TYPE', payload:userType });
        }).catch((err) => {
            dispatch({ type: 'CREATE_USER_TYPE_ERROR', err });
        })
    }
};

export const readUserType=((dispatch)=>{
    firebase.firestore().collection('userType').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_USER_TYPE', payload:data})
    }).catch(err=>dispatch({type:'READ_USER_TYPE_ERROR', err}))
})



export const deleteUserType=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('userType').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_USER_TYPE'})))
        .catch(err=>dispatch({type:'DELETE_USER_TYPE_ERROR', err}))
    }
}

export const updateUserType=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('userType').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_USER_TYPE', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_USER_TYPE_ERROR', err}))
    }
}