import React from 'react'
import './button.scss'


function button({children,isgoogleSignin, inverted ,...others}) {
    
    return (
        <button className={`
        ${inverted ? "inverted": ""}
        ${isgoogleSignin ? 'google-sign-in': ''} 
        custom-button`} {...others}>
            {children}
        </button>
    )
}

export default button
