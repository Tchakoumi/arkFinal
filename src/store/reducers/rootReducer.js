import { combineReducers } from 'redux'
import brandReducer from './brandReducer'
import cartReducer from './cartReducer'
import categoryBrandReducer from './categoryBrandReducer'
import categoryReducer from './categoryReducer'
import colorReducer from './colorReducer'
import couponReducer from './couponReducer'
import orderReducer from './orderReducer'
import productColorReducer from './productColorReducer'
import productReducer from './productReducer'
import providerReducer from './providerReducer'
import quarterReducer from './quarterReducer'
import sizeReducer from './sizeReducer'
import townQuarterReducer from './townQuarterReducer'
import townReducer from './townReducer'
import userReducer from './userReducer'
import userTypeReducer from './userTypeReducer'
import messageReducer from './messageReducer'
import productSizeReducer from './productSizeReducer'


const rootReducer = combineReducers({
    brand:brandReducer,
    cart: cartReducer,
    categoryBrand: categoryBrandReducer,
    category: categoryReducer,
    color: colorReducer,
    coupon: couponReducer,
    order: orderReducer,
    productColor: productColorReducer,
    product: productReducer,
    provider: providerReducer,
    quarter: quarterReducer,
    size: sizeReducer,
    townQuarter: townQuarterReducer,
    town: townReducer,
    user: userReducer,
    userType: userTypeReducer,
    message: messageReducer,
    productSize: productSizeReducer,
})

export default rootReducer