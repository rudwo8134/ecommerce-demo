import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {Preview} from '../../Components/preveiw/preview'
import {selectShopdata, selectCollectionforPreview} from '../../redux/shopdata/shopdataselector'

function Collectionoverview({corections}) {
    return (
        <div className='collections-overview'>
               {corections.map(({id, ...others})=>(
                    <Preview key={id}  {...others}/>
                ))}
        </div>
    )
}

const getdate = createStructuredSelector({
    corections: selectShopdata
})

export default connect(getdate)(Collectionoverview)
