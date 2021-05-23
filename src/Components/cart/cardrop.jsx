import React from 'react'
import './cartdropdown.scss'
import Button from '../custom-button/button'
import {connect} from 'react-redux'
import Cartitems from '../cart-items/cartitems'
import {selectCartItems} from '../../redux/cart/cart.selector'

function cardrop({cartItems}) {
    console.log(cartItems)
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(items =>(
                        <Cartitems key={items.id} item={items}/>
                    ))
                }
            </div>
            <Button>Go To checkout</Button>
        </div>
    )
}

const mapStatetoProps = state =>({
    cartItems: selectCartItems(state)
})

export default connect(mapStatetoProps)(cardrop)
