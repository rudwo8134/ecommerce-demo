import React,{Component} from 'react'
import './signup.scss'

import Forminput from '../form-input/forminput'
import Button from '../custom-button/button'

import {auth, createUserProfileDocument} from '../../firebase/firebase.util'

class Signup extends Component {
    constructor(){
        super();
        this.state= {
            displayName: '',
            email:'',
            password: '',
            confirmPasswrod:''
        }
    }

    handleSubmit = async (e)=>{
        e.preventDefault();

        const {displayName,email,password,confirmPasswrod} =this.state

        if(password ==! confirmPasswrod){
            alert('password dont match')
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user, {displayName})

            this.setState({
            displayName: '',
            email:'',
            password: '',
            confirmPasswrod:''
            })
        }catch(Err){
            console.error(Err)
        }

    }
    handleChange = (e)=>{
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render(){
        const {displayName,email,password,confirmPasswrod} =this.state
        return(
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <Forminput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label="display name"
                    required
                    />
                    <Forminput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label="email"
                    required
                    />
                    <Forminput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label="password"
                    required
                    />
                    <Forminput
                    type='password'
                    name='confirmPassword'
                    value={confirmPasswrod}
                    onChange={this.handleChange}
                    label="confirmPassword"
                    required
                    />
                    <Button type='submit'>Sign up</Button>
                </form>
            </div>
        )
            
        
    }
}

export default Signup