
export const createTownSpecial=(town)=>{

    return (dispatch)=>{
        dispatch({type:'CREATE_TOWN_SPECIAL', payload:town });
    }
};
