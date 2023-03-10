import './Expense.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props){

return (

      
      
      <Card className='expense-item'>
  
        <ExpenseDate date={props.date}/>
            
               <div className='expense-item-description'>
                <h2 className='expense-item h2'>{props.title}</h2>
                <div className='expense-item_price'>${props.amount}</div>
              
            </div>
        </Card>
  )

}

export default ExpenseItem;