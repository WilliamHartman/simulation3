import React, { Component } from 'react';
import winkyFace from './../../img/logo.png';
import './Login.css';


export default class Login extends Component {

    render(){
        return(
            <div className='login'>
                <div className='login-box'>
                    <img src={winkyFace} alt="winky face"/>
                    <h1>Helo</h1>
                    <button>Login / Register</button>
                </div>
            </div>
        )
    }
}