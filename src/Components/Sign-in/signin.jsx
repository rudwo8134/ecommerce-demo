import React, { Component } from 'react'
import './signin.scss'

import Forminput from '../form-input/forminput'
import Button from '../custom-button/button'


import {signInWithGoogle} from '../../firebase/firebase.util'

export class Signin extends Component {
    constructor(props){
        super(props);
        this.state ={
            email:"",
            password:""
        }
    }
    handlesubmit = (e) =>{
        e.preventDefault();
        this.setState({email:'',password:''})
    }
    handlechange = (e) =>{
        const {value, name} =e.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handlesubmit}>
                    <Forminput handlechange={this.handlechange} name="email" label="email" type="email"value={this.state.email} required/>
                    <Forminput handlechange={this.handlechange} name="password" label="password" type="password" value={this.state.password} required/>
                   
                <div className="buttons">
                    <Button type="submit">Sign-in</Button>
                    <Button onClick={signInWithGoogle} isgoogleSignin>Sign in with google</Button>
                </div>
                    
                </form>

            </div>
        )
    }
}

export default Signin
