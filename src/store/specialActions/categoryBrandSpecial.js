
export const createCategoryBrandSpecial=(categoryBrand)=>{

    return (dispatch)=>{
        dispatch({type:'CREATE_CATEGORY_BRAND_SPECIAL', payload:categoryBrand });
    }
};
