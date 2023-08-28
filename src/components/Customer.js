import React from 'react';
import Transaction from './Transaction';

const Customer = ({ id, firstName, lastName, transactions }) => {
  return (
    <div className="customer">
      <h2>{firstName} {lastName}</h2>
      <p>ID: {id}</p>
      <h3>Transactions:</h3>
      <div className="transactions-list">
        {transactions.map(transaction => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            date={transaction.date}
            amt={transaction.amt}
          />
        ))}
      </div>
    </div>
  );
};

export default Customer;
