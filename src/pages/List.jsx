import React, { useState, useEffect } from 'react'
import './list.css'



function List() {
    const [clients, setClients] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/client/')
            .then(response => response.json())
            .then(data=> setClients(data))
    },[])

    
   

    return (
        <div className="list-clients">
            <h1>Clients List</h1> 
            <ul className="list-container">
                {clients.map((item)=>(
                        <li key={item._id}>
                            <input type="text" value= {item.name} readOnly/>    
                            <input type="text" value= {item.contact} readOnly/> 
                            <input type="text" value= {item.telephone} readOnly/> 
                            <button className="del-btn" onClick={()=>{alert("You wanto to delete "+ item.name+" ?")}}>delete</button>
                        </li>
                ))}
               
               
            </ul>
        </div>
    )
}

export default List
