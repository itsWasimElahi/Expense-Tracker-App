//PROPS child to parent
import React, { useState } from "react";

import "./ExpenseForm.css";
// bcz we expect fn() from parent in props now for passing data from child to parent
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
 
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault(); // page will not reload on submission
  
    const expenseData = {      // we have to pass this object to parent
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData) ; 
    
    props.onSaveExpenseData(expenseData);  // child se data as aparameter parent ma jo fn() bnaya tha us ma pass hogya
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* // we could not write onChange={inputChangeHandler}  because we couldn't pass arguments of fn() this way thats why we made arrow fn()*/}
          <input
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
