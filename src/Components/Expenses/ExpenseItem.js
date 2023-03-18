import React,{useState} from 'react';


import './Expense.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpensesDetails from './ExpensesDetails';


const ExpenseItem = (props) =>{
    const [title,setTitle] = useState(props.title)
 
      const clickHandler = () =>{
         setTitle("news Paper")
         console.log(title)

      }    
    
 
 
   // const clickHandler = (id) =>{
   //    props.deleteHandler(props.amount)
    
   // };
   
   return (

        <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
         <ExpensesDetails amount={props.amount} title={title}/>

        <button onClick={clickHandler}> Change Title</button>

         {/* <button onClick={clickHandler}>Delete Expense</button> */}
        </Card>
  )

}

export default ExpenseItem;