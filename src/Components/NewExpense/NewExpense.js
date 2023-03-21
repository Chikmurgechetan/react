import React,{useState} from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) =>{
   
 const[isEditing, setIsEditing] =useState(false);
    const saveExpenseDataHandler1 = (enteredExpenseData) =>{
         const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
         };
         props.addExpense(expenseData);
         setIsEditing(false);
    } ;
    
    const startEditingHandler = () =>{
        setIsEditing(true);
    }
    
    const stopEditingHandler = () =>{
        setIsEditing(false);
    }


    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
        {isEditing &&
         <ExpenseForm onSaveExpenseData={saveExpenseDataHandler1} 
        onCancle={stopEditingHandler} />}
    </div>
}

export default NewExpense;