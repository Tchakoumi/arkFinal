import firebase from 'firebase/app'

export const createMessage=(message)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('message').doc(message.idMessage).set({...message})
        .then(() =>{
            dispatch({type:'CREATE_MESSAGE', payload:message });
        }).catch((err) => {
            dispatch({ type: 'CREATE_MESSAGE_ERROR', err });
        })
    }
};
