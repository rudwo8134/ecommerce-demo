import React from 'react'
import {connect} from 'react-redux'
import './collecystyle.scss'
import Button from '../custom-button/button'
import {AddItem} from '../../redux/cart/cartaction'

const Collectionitems = ({item, additem}) => {
    const {name,imageUrl,price} = item

    return (
        <div className='collection-item'>
            <div className="image"
            style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            </div>
            <Button onClick={ () => additem(item)} inverted>Add to cart</Button>
            
            
        </div>
    )
}



const mapDispatchToProps = dispatch =>({
    additem: item => dispatch(AddItem(item))
})

export default connect(null ,mapDispatchToProps)(Collectionitems)