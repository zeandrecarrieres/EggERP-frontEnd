import React, { useState, useEffect } from "react";
import Transaction from '../components/Transaction'

function Transactions({addCount}) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/transaction/")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  },[addCount]);

  return (
    <div>
      {transactions.map((transaction)=>
        (
          <Transaction key={transaction._id} transaction={transaction} />
          )
         
          )}
          <div className="total-indicateur">
            <h2>Total</h2>
            <p> {transactions.map((transaction, acc)=>transaction.price + transaction.price,0)}</p>
          </div>
    </div>
  );
}

export default Transactions;
