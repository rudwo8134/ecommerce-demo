import React from 'react'
import './headerstyle.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../logofile/logo.svg'

export const Header = () => {
    return (
        <div className="header">
            <Link classname="logo-container" to='/'>
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    shop
                </Link>
                <Link className="option" to="/shop">
                    constact
                </Link>

            </div>
        </div>
    )
}
