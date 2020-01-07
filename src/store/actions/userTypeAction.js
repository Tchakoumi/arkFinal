import firebase from 'firebase/app'

export const createUserType=(userType)=>{

    return (dispatch)=>{
        //make async call to database
        firebase.firestore().collection('userType').doc(userType.idUserType).set({...userType})
        .then(() =>{
            dispatch({type:'CREATE_USER_TYPE', payload:userType });
        }).catch((err) => {
            dispatch({ type: 'CREATE_USER_TYPE_ERROR', err });
        })
    }
};
