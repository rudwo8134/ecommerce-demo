import React from 'react'
import './catergoryd.scss'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shopdata/shopdataselector'

import Colitem from '../../Components/collection-items/collectionitems'

function Cartegory({collection, match}) {
    const {title,items}=collection
    return (
        <div className='collection-page'>
            <h2 className="title">{title}</h2>
            <div className='items'>
                {
                    items.map(item=>(
                        <Colitem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToprops = (state, ownprops) =>({
    collection: selectCollection(ownprops.match.params.categoryid)(state)
})

export default connect(mapStateToprops)(Cartegory)
