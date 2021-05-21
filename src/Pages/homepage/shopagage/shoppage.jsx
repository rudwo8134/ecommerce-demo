import React, { Component } from 'react'
import Shopdata from './shopdata'
import './shopagestyle.scss'
import {Preview} from '../../../Components/preveiw/preview'

export default class Shoppage extends Component {
    constructor(props){
        super(props)
        this.state ={
            corections:Shopdata
        }
    }
    render() {
        const {corections} =this.state
        return (
            <div className="shop-page">
                {corections.map(({id, ...others})=>(
                    <Preview key={id}  {...others}/>
                ))}
        
            </div>
        )
    }
}
