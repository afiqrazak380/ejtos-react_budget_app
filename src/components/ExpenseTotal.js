// In ExpenseTotal.js you will be adding useContext and AppContext. Taking the expenses from state.

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// 'ExpenseTotal' functional component
const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className='alert alert-primary'>
      <span>Spent so far: £{totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
