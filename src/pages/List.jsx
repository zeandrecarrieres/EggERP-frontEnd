import React, { useState, useEffect } from 'react'
import './list.css'



function List() {
    const [clients, setClients] = useState([]);

    useEffect(()=>{
        const list = fetch('http://localhost:3001/client/')
            .then(response => response.json())
            .then(data=> setClients(data))
    },[])

    console.log(clients)

    // clients.map((item)=>{
    //     <p>{item.email}</p>
    // })

    return (
        <div>
            <h1>Clients List</h1> 
            <ul className="list-container">
                <li><a href="">Nome do Cliente</a> | <span>Contato</span></li>
                <li><a href="">Nome do Cliente</a> | <span>Contato</span></li>
                <li><a href="">Nome do Cliente</a> | <span>Contato</span></li>
                <li><a href="">Nome do Cliente</a> | <span>Contato</span></li>
            </ul>
        </div>
    )
}

export default List
