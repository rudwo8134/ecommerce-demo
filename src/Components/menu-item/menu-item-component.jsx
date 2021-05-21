import React from 'react'
import './menu-itemstyle.scss'

export const Menuitemcomponent = ({title, imageUrl, size}) => {
    return (
        <div 
        className={`${size} menu-item`}>
        <div
        className='background-image'
        style={{backgroundImage:`url(${imageUrl})`}} 
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Show Now</span>
        </div>
    
        </div>
    )
}
