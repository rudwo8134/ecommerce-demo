import React from 'react'
import './car-time.scss'
import {ReactComponent as ShoppingIcon} from '../../logofile/cart.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cartaction'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'


function Carticon({toggleCartHidden, number}) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{number}</span>
            
        </div>
    )
}
const mapgetdata = createStructuredSelector({
    number: selectCartItemsCount})

const mapDispatchToprops = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapgetdata,mapDispatchToprops)(Carticon)
