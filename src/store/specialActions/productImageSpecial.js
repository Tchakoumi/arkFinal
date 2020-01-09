
export const createProductImageSpecial=(productImage)=>{

    return (dispatch)=>{
        dispatch({type:'CREATE_PRODUCT_IMAGE_SPECIAL', payload:productImage });
    }
};
