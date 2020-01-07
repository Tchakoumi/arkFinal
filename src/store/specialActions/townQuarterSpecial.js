
export const createTownQuarterSpecial=(townQuarter)=>{

    return (dispatch)=>{
        dispatch({type:'CREATE_TOWN_QUARTER_SPECIAL', payload:townQuarter });
    }
};
