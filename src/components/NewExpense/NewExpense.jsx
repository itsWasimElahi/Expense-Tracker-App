
import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';  

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {  // we copied expenseData object here from ExpenseForm.jsx
      ...enteredExpenseData,
      id: Math.random().toString() // aur hum parent ma naiye cheezain add bhi kr skte like id
    };
    props.onAddExpense(expenseData);  // child se data as a parameter parent ma jo fn() bnaya tha us ma pass hogya
    //console.log(expenseData) ; 
    // console.log(enteredExpenseData) ; 

  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />  {/*/ yaha se ye parent ka fn() as a prop pass hoga child ma aur ye child se data le kr ayega*/}
    </div>
  );
};

export default NewExpense;
