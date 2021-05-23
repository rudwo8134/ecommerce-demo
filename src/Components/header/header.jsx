import React from 'react'
import './headerstyle.scss'
import {Link} from 'react-router-dom'
import Logo from '../../logofile/ourshop.png'
import {auth} from '../../firebase/firebase.util'
import {connect} from 'react-redux'
import Carticon from '../cart-icon/cart-icon'
import CartDrop from '../cart/cardrop'

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link classname="logo-container" to='/'>
                <img src={Logo} alt="logo" className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    shop
                </Link>
                <Link className="option" to="/shop">
                    constact
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={()=> auth.signOut()}>Sign out</div>
                    :
                    <Link className='option' to='/signin'>Sign in</Link>
                }
                <Carticon/>
            </div>
            {hidden ? null  : <CartDrop/>}
        </div>
    )
}

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({
    currentUser: currentUser,
    hidden: hidden
})

export default connect(mapStateToProps)(Header)
