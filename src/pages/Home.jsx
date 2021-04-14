import React from 'react'
import './home.css'
import Logo from "../assets/logo.png"

function Home() {
    return (
        <div className="home">
            <div className="login-container">
                <img className="logo" src={Logo} alt="logo"/>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Senha"/>
                <button className="login-btn">ENTRAR</button>
                <a href="#" className="login-create">CRIAR CONTA</a>
            </div>
        </div>
    )
}

export default Home
