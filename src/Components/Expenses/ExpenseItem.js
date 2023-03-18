import React from 'react';

import './Expense.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpensesDetails from './ExpensesDetails';


const ExpenseItem = (props) =>{
   const clickHandler = (id) =>{
      props.deleteHandler(props.amount)
    
   };
   
   return (

        <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
         <ExpensesDetails amount={props.amount} title={props.title}/>
         <button onClick={clickHandler}>Delete Expense</button>
        </Card>
  )

}

export default ExpenseItem;