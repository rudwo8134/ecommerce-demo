import React from 'react'
import './car-time.scss'
import {ReactComponent as ShoppingIcon} from '../../logofile/cart.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cartaction'


function Carticon({toggleCartHidden}) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
            
        </div>
    )
}

const mapDispatchToprops = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(null,mapDispatchToprops)(Carticon)
