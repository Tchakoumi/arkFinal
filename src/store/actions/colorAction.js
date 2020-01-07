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
