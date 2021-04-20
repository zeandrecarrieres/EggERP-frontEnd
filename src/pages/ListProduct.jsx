import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import './list.css'
import { FaRegTrashAlt } from "react-icons/fa";



function ListProduct() {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState("");

    useEffect(()=>{
        fetch('http://localhost:3001/product/')
            .then(response => response.json())
            .then(data=> setProducts(data))
    },)

const deleteProduct = async (e) => {
    await fetch("http://localhost:3001/product/"+e, {
        method: "DELETE",

    })
}

const editProduct =  (e) => {
    console.log(e)
    setId(e)
    console.log(id)
    return
    // <Redirect  to="/prod_edit" id={id} />
}


  
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
                        <button className="del-btn" value={product._id} onClick={(e) =>deleteProduct(e.target.value)}><FaRegTrashAlt />delete</button>   
                        <button className="edit-btn" value={product._id} onClick={(e) =>editProduct(e.target.value)}> Home</button> 
                          

                    </li>
                       
                ))}
               
               
            </ul>
        </div>
    )
}

export default ListProduct
