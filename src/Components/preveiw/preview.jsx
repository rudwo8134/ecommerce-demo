import React from 'react'
import './styleprevie.scss'
import Collectionitems from '../collection-items/collectionitems'

export const Preview = ({title,items}) => {
  
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {items.filter((i, index) => index < 4).map((i)=>(
                <Collectionitems key={i.id} item={i}/>
            ))}
            </div>
        </div>
    )
}
