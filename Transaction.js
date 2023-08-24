import React from 'react';

const Transaction = ({ id, date, amt }) => {
  return (
    <div className="transaction">
      <p>ID: {id}</p>
      <p>Date: {date}</p>
      <p>Amount: {amt}</p>
    </div>
  );
};

export default Transaction;
