import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cartredux'
import directroyReducer from './directory/directory.reducer'
import shopdataRedux from './shopdata/shopdataredux'


const persistConfig = {
    key: 'root',
    storage,
    whitelist:[
        'cart'
    ]
}

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directroyReducer,
    shop: shopdataRedux
})

export default persistReducer(persistConfig, rootReducer)