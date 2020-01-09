
export const createMessageSpecial=(message)=>{

    return (dispatch)=>{
        dispatch({type:'CREATE_MESSAGE_SPECIAL', payload:message });
    }
};
