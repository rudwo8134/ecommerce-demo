import React from 'react'
import './checkouts.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectTotal} from '../../../redux/cart/cart.selector'
import Checkout from '../../../Components/checkoutitem/checkout'
import Stripebutton from '../../../Components/stripe-button/stripebutton'

function checkout({cartItems, total}) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div> 
                {
                    cartItems.map(item=>
                       <Checkout key={item.id} cartItem={item}/>
                        )
                }

                <div className="total">
                <span>Total: ${total}</span>
                </div>
                <div className="test-warning">
                    *please use the following test credit car for paymens
                    <br/>
                    4242 4242 4242 4242 Exp 01/20  CVC422
                </div>
                <Stripebutton price={total}/>
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotal
})

export default connect(mapStatetoProps)(checkout)

