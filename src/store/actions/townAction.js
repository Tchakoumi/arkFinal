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
