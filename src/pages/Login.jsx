import { useState } from 'react'
import React from 'react'
import './login.css'
import Logo from "../assets/logo.png"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (e)=>{
        e.preventDefault()
        console.log(email, password)
    }
 

    return (
        <div className="home">
            <div className="login-container" >
            <img className="logo" src={Logo} alt="logo"/>
                <form onSubmit={submit}> 
                <input type="email" value = {email} placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" value = {password}  placeholder="Senha" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit" className="login-btn">ENTRAR</button>
                <a href="//user_register" className="login-create">CRIAR CONTA</a>
                </form>
                
            </div>
        </div>
    )
}

export default Login
