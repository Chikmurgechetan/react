import './ExpenseDate.css'


const ExpenseDate =(props)=>{
    const month = props.date.toLocaleString('en-US', { month:'long'});
    const day = props.date.toLocaleString('en-US', { day:'2-digit'});  
    const year = props.date.getFullYear();

    return (
        //<div className='expense-item'> 
  
        <div className='expense-date'>
        <div className='expense-date_month'>{month}</div>
        <div className='expense-date_day'>{day}</div>
        <div className='expense-date_year'>{year}</div>
       </div>
    )
         /* <div className='expense-item-description'>
                <h2 className='expense-item h2'>{props.title}</h2>
                <div className='expense-item_price'>{props.amount}</div>
              
            </div>  */

         //</div>
      
    
}

export default ExpenseDate;