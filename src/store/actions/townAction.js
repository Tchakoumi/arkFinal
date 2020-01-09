import firebase from 'firebase/app'

export const createTown=(town)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('town').doc(town.idTown).set({...town})
        .then(() =>{
            dispatch({type:'CREATE_TOWN', payload:town });
        }).catch((err) => {
            dispatch({ type: 'CREATE_TOWN_ERROR', err });
        })
    }
};

export const readTown=((dispatch)=>{
    firebase.firestore().collection('town').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_TOWN', payload:data})
    }).catch(err=>dispatch({type:'READ_TOWN_ERROR', err}))
})



export const deleteTown=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('town').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_TOWN'})))
        .catch(err=>dispatch({type:'DELETE_TOWN_ERROR', err}))
    }
}

export const updateTown=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('town').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_TOWN', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_TOWN_ERROR', err}))
    }
}