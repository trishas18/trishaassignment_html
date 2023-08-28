import React from 'react';
import Customer from 'C:\Users\TRISH\demoapp\src\components\Customer.js';

const App = () => {
  // Sample data for demonstration
  const customers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      transactions: [
        { id: 101, date: '2023-08-24', amt: 100 },
        { id: 102, date: '2023-08-25', amt: 150 },
      ],
    },
    // Add more customer data here
  ];

  return (
    <div className="app">
      <h1>Customer Transactions App</h1>
      {customers.map(customer => (
        <Customer
          key={customer.id}
          id={customer.id}
          firstName={customer.firstName}
          lastName={customer.lastName}
          transactions={customer.transactions}
        />
      ))}
    </div>
  );
};

export default App;
