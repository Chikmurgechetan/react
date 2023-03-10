import './Expense.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
// const month = props.date.toLocaleString('en-US', { month:'long'});
// const day = props.date.toLocaleString('en-US', { day:'2-digit'});  
// const year = props.date.getFullYear();

return (

      
      
      <div className='expense-item'>
    {/* /* <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
           </div>
            */
            }
        <ExpenseDate date={props.date}/>
            
               <div className='expense-item-description'>
                <h2 className='expense-item h2'>{props.title}</h2>
                <div className='expense-item_price'>{props.amount}</div>
              
            </div>
        </div>
  )

}

export default ExpenseItem;