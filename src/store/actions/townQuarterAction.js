import firebase from 'firebase/app'

export const createTownQuarter=(townQuarter)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('townQuarter').doc(townQuarter.idTownQuarter).set({...townQuarter})
        .then(() =>{
            dispatch({type:'CREATE_TOWN_QUARTER', payload:townQuarter });
        }).catch((err) => {
            dispatch({ type: 'CREATE_TOWN_QUARTER_ERROR', err });
        })
    }
};

export const readTownQuarter=((dispatch)=>{
    firebase.firestore().collection('townQuarter').get().then((querySnapshot)=>{
        let data=[]
        querySnapshot.forEach(doc=>data=[...data, {...doc.data()}])
        dispatch({type:'READ_TOWN_QUARTER', payload:data})
    }).catch(err=>dispatch({type:'READ_TOWN_QUARTER_ERROR', err}))
})



export const deleteTownQuarter=(document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('townQuarter').doc(document).update({deleted:true})
        .then((dispatch({type:'DELETE_TOWN_QUARTER'})))
        .catch(err=>dispatch({type:'DELETE_TOWN_QUARTER_ERROR', err}))
    }
}

export const updateTownQuarter=(updateObject, document)=>{
    return(dispatch)=>{
        firebase.firestore().collection('townQuarter').doc(document).update(updateObject)
        .then((dispatch({type:'UPDATE_TOWN_QUARTER', payload:updateObject})))
        .catch(err=>dispatch({type:'UPDATE_TOWN_QUARTER_ERROR', err}))
    }
}