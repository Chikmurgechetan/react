import React,{useState} from 'react';
import Card from '../UI/Card';
import './Expense.css';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) =>{

    const [filteredYear, setFilteredYear] = useState('2021'); 
    
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }
    
    const filteredExpenses= props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear;
    })


    //  let expensesContent =  <p>No Expenses Found</p>;

    //  if(filteredExpenses.length >0){
    //     expensesContent = filteredExpenses.map((expense)=>(
    //         <ExpenseItem
    //            key={expense.id}
    //            title={expense.title}
    //            amount={expense.amount}
    //            date={expense.date}
    //         />
    //         ))
    //  }
      return (
        <Card className="expense">
       <ExpensesFilter
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}
         />
         <ExpensesChart expenses={filteredExpenses} />
         <ExpensesList items={filteredExpenses}/>
        </Card>
        )
    }

export default Expenses;