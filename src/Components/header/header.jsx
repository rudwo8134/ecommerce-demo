import React from 'react'
import './headerstyle.scss'
import {Link} from 'react-router-dom'
import Logo from '../../logofile/ourshop.png'
import {auth} from '../../firebase/firebase.util'
import {connect} from 'react-redux'

const Header = ({currentUser}) => {
    console.log(currentUser)
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
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
