import React,{useState} from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) =>{

    const [filteredYear, setFilteredYear] = useState('2021'); 
    
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }
    
    const filteredExpenses= props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
        <Card className="expense">
       <ExpensesFilter
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}
         />
      
      
      {filteredExpenses.map((expense)=>(
         <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
         />

        ))}
      
       </Card>
        )
    }

export default Expenses;