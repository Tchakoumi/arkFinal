
export const createProviderSpecial=(provider)=>{

    return (dispatch)=>{
        dispatch({type:'CREATE_PROVIDER_SPECIAL', payload:provider });
    }
};
