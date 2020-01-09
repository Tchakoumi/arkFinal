import firebase from 'firebase/app'

export const createSize=(size)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('size').doc(size.idSize).set({...size})
        .then(() =>{
            dispatch({type:'CREATE_SIZE', payload:size });
        }).catch((err) => {
            dispatch({ type: 'CREATE_SIZE_ERROR', err });
        })
    }
};

export const readSize=((dispatch)=>{
    firebase.firestore().collection('size').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_SIZE', payload:data})
    }).catch(err=>dispatch({type:'READ_SIZE_ERROR', err}))
})



export const deleteSize=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('size').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_SIZE'})))
        .catch(err=>dispatch({type:'DELETE_SIZE_ERROR', err}))
    }
}

export const updateSize=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('size').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_SIZE', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_SIZE_ERROR', err}))
    }
}