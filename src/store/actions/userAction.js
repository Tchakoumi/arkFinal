import firebase from 'firebase/app'

export const createUser=(user)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('user').doc(user.idUser).set({...user})
        .then(() =>{
            dispatch({type:'CREATE_USER', payload:user });
        }).catch((err) => {
            dispatch({ type: 'CREATE_USER_ERROR', err });
        })
    }
};
