import { combineReducers } from 'redux'
import brandReducer from './brandReducer'
import cartReducer from './cartReducer'
import categoryReducer from './categoryReducer'
import colorReducer from './colorReducer'
import connectedUserReducer from './connectedUserReducer'
import couponReducer from './couponReducer'
import orderReducer from './orderReducer'
import productColorReducer from './productColorReducer'
import productImageReducer from './productImageReducer'
import productReducer from './productReducer'
import providerReducer from './providerReducer'
import quarterReducer from './quarterReducer'
import sizeReducer from './sizeReducer'
import subCategoryReducer from './subCategoryReducer'
import subCategoryBrandReducer from './subCategoryBrandReducer'
import townQuarterReducer from './townQuarterReducer'
import townReducer from './townReducer'
import userReducer from './userReducer'
import userTypeReducer from './userTypeReducer'
import messageReducer from './messageReducer'
import productSizeReducer from './productSizeReducer'
import livreurReducer from './livreurReducer'


const rootReducer = combineReducers({
    brand:brandReducer,
    cart: cartReducer,
    category: categoryReducer,
    color: colorReducer,
    connectedUser: connectedUserReducer,
    coupon: couponReducer,
    livreur: livreurReducer,
    order: orderReducer,
    productColor: productColorReducer,
    productImage: productImageReducer,
    product: productReducer,
    provider: providerReducer,
    quarter: quarterReducer,
    size: sizeReducer,
    subCategory: subCategoryReducer,
    subCategoryBrand: subCategoryBrandReducer,
    townQuarter: townQuarterReducer,
    town: townReducer,
    user: userReducer,
    userType: userTypeReducer,
    message: messageReducer,
    productSize: productSizeReducer,
})

export default rootReducer