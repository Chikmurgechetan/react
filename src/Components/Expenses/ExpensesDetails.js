const ExpensesDetails = (props) =>{
      return(
          
        <div className="expense-item__description">  
        
         <h2 className="expense-item h2">{props.title}</h2>
  
         <div className="expense-item_price">${props.amount}</div>

         </div>


      )
}
export default ExpensesDetails;