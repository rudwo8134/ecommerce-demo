export const addItemtoCart = (cartItems, carItemtoadd) =>{
    const existcartitem = cartItems.find(cartItem => cartItem.id === carItemtoadd.id)

    if(existcartitem){
        return cartItems.map(item =>
            item.id === carItemtoadd.id ? {...item, quantity:item.quantity+1} : {...item})
    }
    
    return [...cartItems, {...carItemtoadd, quantity:1}]
}