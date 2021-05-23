import React from 'react'
import './checkout.scss'

function Checkout({cartItem: {name,imageUrl,price, quantity}}) {
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
             <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button"><i class="far fa-window-close"></i> </div>            
        </div>
    )
}

export default Checkout
