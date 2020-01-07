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
