import React from 'react'
import './cartdropdown.scss'
import Button from '../custom-button/button'
import {connect} from 'react-redux'
import Cartitems from '../cart-items/cartitems'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cartaction'



function cardrop({cartItems, history, dispatch}) {
    
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(items =>(
                        <Cartitems key={items.id} item={items}/>
                    ))
                    :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <Button onClick={()=>{
                history.push('/checkout')
                dispatch(toggleCartHidden())
                }}>Go To checkout</Button>
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems
})



export default withRouter(connect(mapStatetoProps)(cardrop))
