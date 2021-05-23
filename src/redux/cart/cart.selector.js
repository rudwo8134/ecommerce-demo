import {createSelector} from 'reselect'

const selectCart = state => state.cart


export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems)=>
    cartItems.reduce((emptyqty, cartitem)=> emptyqty+cartitem.quantity, 0)
)

export const selectTotal = createSelector(
    [selectCartItems],
    (cartItems)=>
    cartItems.reduce((emptyqty, cartitem)=> emptyqty+cartitem.quantity*cartitem.price, 0)
)