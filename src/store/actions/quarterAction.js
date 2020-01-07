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
