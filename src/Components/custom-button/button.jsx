import React from 'react'
import './button.scss'


function button({children,isgoogleSignin,...others}) {
    
    return (
        <button className={`${isgoogleSignin ? 'google-sign-in': ''} custom-button`} {...others}>
            {children}
        </button>
    )
}

export default button
