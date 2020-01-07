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
