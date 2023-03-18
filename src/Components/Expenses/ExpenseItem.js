import {useState} from 'react';


import './Expense.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpensesDetails from './ExpensesDetails';


const ExpenseItem = (props) =>{
    const [amount,changeAmount] = useState(props.amount)
 
      const addExpense = () =>{
         changeAmount(amount+100)
        

      }    
    
 
 
   // const clickHandler = (id) =>{
   //    props.deleteHandler(props.amount)
    
   // };
   
   return (

        <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
         <ExpensesDetails amount={amount} title={props.title}/>

       <button onClick={addExpense}> Add Expenses</button>

         {/* <button onClick={clickHandler}>Delete Expense</button> */}
        </Card>
  )

}

export default ExpenseItem;