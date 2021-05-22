import React from 'react'
import './form.scss'

function forminput({handlechange, label, value, ...otherprops}) {
    return (
        <div className="group">
            <input onChange={handlechange} {...otherprops} className="form-input"/>
            {
                label ?
              
                (<label className={`${value.length ? 'shrink' : ''}form-input-label`}>
                      {label}
                </label>)
                : null
            }
        </div>
    )
}

export default forminput
