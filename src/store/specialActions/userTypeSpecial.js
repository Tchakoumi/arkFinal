
export const createUserTypeSpecial=(userType)=>{

    return (dispatch)=>{
        dispatch({type:'CREATE_USER_TYPE_SPECIAL', payload:userType });
    }
};
