 import React from "react";
import Expenses from "./Components/Expenses/Expenses";
 import NewExpense from "./Components/NewExpense/NewExpense";

const App =() => {  
  

  let expense =[
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 7,14),
    },
    {id: 'e2', title: 'New Tv', amount: 799.49, date: new Date(2022,2,12)},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: '294.67',
      date: new Date(2023,3,28),

    },
    {
      id: 'e4',
      title: 'New Desk (Woden)',
      amount:450,
      date: new Date(2021, 5,12),
    },
    
  ];
  return (
    <div>
    <NewExpense/>

     <Expenses items={expense} />
    </div>
  );
}

export default App;
