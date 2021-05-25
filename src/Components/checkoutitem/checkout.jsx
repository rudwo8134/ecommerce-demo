import React from 'react'
import './checkout.scss'
import {connect} from 'react-redux'


import {clearitemfromcart, removeitem,AddItem} from '../../redux/cart/cartaction'

function Checkout({cartItem, clearItem, addItem, removeitem}) {
    const {name,imageUrl,price, quantity} =cartItem
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
             <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={()=>removeitem(cartItem)}><i class="fas fa-arrow-left"></i>  </div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>addItem(cartItem)}><i class="fas fa-arrow-right"></i></div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>clearItem(cartItem)}><i class="far fa-window-close"></i> </div>            

        </div>
    )
}

const mapDispatchtoProps = dispatch =>({
    clearItem: item => dispatch(clearitemfromcart(item)),
    addItem: item => dispatch(AddItem(item)),
    removeitem: item => dispatch(removeitem(item))
})

export default connect(null,mapDispatchtoProps)(Checkout)
