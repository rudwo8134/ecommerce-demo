import React from 'react'
import {Route} from 'react-router-dom'
import './shopagestyle.scss'
import Collectoverview from '../../../Components/collection-overview/collectionoverview'
import Catergory from '../../cartegory/cartegory'


const Shoppage = ({match}) => {
   
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={Collectoverview}/>
                <Route path={`${match.path}/:categoryid`} component={Catergory}/>
            </div>
        )
    
}


export default Shoppage
