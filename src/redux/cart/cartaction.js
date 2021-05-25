import CartActionTypes from './carttype'

export const toggleCartHidden = () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const AddItem = (item)=>({
    type:CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearitemfromcart = (item)=>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeitem = (item)=>({
    type:CartActionTypes.REMOVE_ITEM,
    payload: item

})
