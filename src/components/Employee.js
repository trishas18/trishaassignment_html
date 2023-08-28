
import React from 'react';

const Employee = ({ id, name, salary }) => {
return (
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Employee Details</h5>
        <p className="card-text">ID: {id}</p>
        <p className="card-text">Name: {name}</p>
        <p className="card-text">Salary: {salary}</p>
    </div>
    </div>
);
};

export default Employee;

