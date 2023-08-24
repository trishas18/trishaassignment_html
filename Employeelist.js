

  import React from 'react';
  import Employee from './Employee'; 
  
  const EmployeeList = () => {
  const employees = [
      { id: 1, name: 'trish', salary: 100000 },
      { id: 2, name: 'abc', salary: 70000 },
      { id: 3, name: 'xyz', salary: 75000 },
  ];
  
  return (
      <div className="d-flex justify-content-around">
          {employees.map(employee => (
          <Employee key={employee.id} id={employee.id} name={employee.name} salary={employee.salary} />
      ))}
      </div>
  );
  };
  
  export default EmployeeList;