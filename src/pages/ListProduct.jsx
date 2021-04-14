import React, { useState, useEffect } from 'react'
import './list.css'



function ListProduct() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/product/')
            .then(response => response.json())
            .then(data=> setProducts(data))
    },[])


  
//    console.log(products)

    return (
        <div className="list-products">
            <h1>Products List</h1> 
            <ul className="list-container">
                {products.map((product)=>(
                    <li key={product._id}>
                        <input type="text" value= {product.name} readOnly/>    
                        <input type="text" value= {product.description} readOnly/> 
                        <input type="text" value= {product.unit} readOnly/> 
                        <input type="text" value= {product.name}  readOnly/>  
                        <button className="del-btn" onClick={()=>{alert("You wanto to delete "+ product.name+" ?")}}>delete</button>     

                    </li>
                       
                ))}
               
               
            </ul>
        </div>
    )
}

export default ListProduct
