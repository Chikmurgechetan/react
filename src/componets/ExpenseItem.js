import './Expense.css';

function ExpenseItem(props){
//   const expenseDate = new Date(2023,3,28);
//    const expenseTitle = 'Car Insurence';
//    const expenseAmount = 294.67;
  
    return (

        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item-description'>
                <h2 className='expense-item h2'>{props.title}</h2>
                <div className='expense-item_price'>${props.amount}</div>
              
            </div>
        </div>
  )

}

export default ExpenseItem;