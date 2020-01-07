
export const createColorSpecial=(color)=>{

    return (dispatch)=>{
        dispatch({type:'CREATE_COLOR_SPECIAL', payload:color });
    }
};
