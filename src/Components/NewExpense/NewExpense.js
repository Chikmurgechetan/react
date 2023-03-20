import React from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) =>{
   
    const saveExpenseDataHandler1 = (enteredExpenseData) =>{
         const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
         };
         props.addExpense(expenseData);
    } ;
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler1} />
    </div>
}

export default NewExpense;