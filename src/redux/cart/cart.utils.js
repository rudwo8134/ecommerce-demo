export const addItemtoCart = (cartItems, carItemtoadd) =>{
    const existcartitem = cartItems.find(cartItem => cartItem.id === carItemtoadd.id)

    if(existcartitem){
        return cartItems.map(item =>
            item.id === carItemtoadd.id ? {...item, quantity:item.quantity+1} : {...item})
    }
    
    return [...cartItems, {...carItemtoadd, quantity:1}]
}

export const removeitemfromcart = (cartItems, cartItemsremove) =>{
    const existingcart = cartItems.find(cartItem => cartItem.id === cartItemsremove.id )

    if(existingcart.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemsremove.id)
    }
    return cartItems.map(it=> it.id === cartItemsremove.id ? {...it, quantity:it.quantity- 1 }: it)
}