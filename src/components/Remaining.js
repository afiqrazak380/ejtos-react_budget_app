// In Remaining.js you will be importing expense and budget from context and getting the remaining value using subtraction.

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// 'Remaining' functional component
const Remaining = () => {
  // Consuming value using useContext
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: £{budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
