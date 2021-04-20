import React from 'react'

function Transaction({transaction}) {


    return (
        <div className="transaction-item">
            <div className="champ">{transaction.date}</div>
            <div className="champ">{transaction.type}</div>
            <div className="champ">{transaction.product}</div>
            <div className="champ">{transaction.quantity}</div>
            <div className="champ">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'EUR'}).format(transaction.price)} </div> 
            <div className="champ"> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'EUR'}).format(transaction.price_total)} </div>    
        </div>
     )
}

export default Transaction