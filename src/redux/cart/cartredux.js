import CartActionTypes from './carttype'
import {addItemtoCart} from './cart.utils'
import {removeitemfromcart} from './cart.utils'

const INTITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

const cartReducer = (state=INTITIAL_STATE, action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemtoCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeitemfromcart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cart=>cart.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cartReducer