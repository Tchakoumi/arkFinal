import firebase from 'firebase/app'

export const createColor=(color)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('color').doc(color.idColor).set({...color})
        .then(() =>{
            dispatch({type:'CREATE_COLOR', payload:color });
        }).catch((err) => {
            dispatch({ type: 'CREATE_COLOR_ERROR', err });
        })
    }
};

export const readColor=((dispatch)=>{
    firebase.firestore().collection('color').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_COLOR', payload:data})
    }).catch(err=>dispatch({type:'READ_COLOR_ERROR', err}))
})



export const deleteColor=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('color').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_COLOR'})))
        .catch(err=>dispatch({type:'DELETE_COLOR_ERROR', err}))
    }
}

export const updateColor=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('color').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_COLOR', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_COLOR_ERROR', err}))
    }
}