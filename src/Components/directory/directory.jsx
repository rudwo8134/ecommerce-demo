import React from 'react'
import Menuitemcomponent from '../menu-item/menu-item-component'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directoryselector'
import {createStructuredSelector} from 'reselect'

const Directory = ({sections}) =>{
        return (
            <div className='directory-menu'>
                {sections.map(({id, ...otherprops})=>(
                    <Menuitemcomponent key={id} {...otherprops}/>
                ))}
            </div>
        )
}

const mapStateToprops = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToprops)(withRouter(Directory))