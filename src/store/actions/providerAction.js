import firebase from 'firebase/app'

export const createProvider=(provider)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('provider').doc(provider.idProvider).set({...provider})
        .then(() =>{
            dispatch({type:'CREATE_PROVIDER', payload:provider });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROVIDER_ERROR', err });
        })
    }
};
