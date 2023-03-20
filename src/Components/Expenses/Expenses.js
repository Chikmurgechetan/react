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
    
    return (
        <Card className="expense">
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
       <ExpenseItem 
        title={props.items[0].title} 
        amount={props.items[0].amount} 
        date={props.items[0].date}
        deleteHandler={props.deleteHandler}
        />
        
        <ExpenseItem 
        title={props.items[1].title} 
        amount={props.items[1].amount} 
        date={props.items[1].date}
        deleteHandler={props.deleteHandler}

        />
        


        <ExpenseItem title={props.items[2].title} 
        amount={props.items[2].amount} 
        date={props.items[2].date}
        deleteHandler={props.deleteHandler}
/>
         
      
    
        <ExpenseItem title={props.items[3].title} 
        amount={props.items[3].amount} 
        date={props.items[3].date}
        deleteHandler={props.deleteHandler}
/>

    
      
        </Card>
        



    )

}

export default Expenses;