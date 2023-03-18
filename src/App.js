import React,{useState} from "react";
import Expenses from "./Components/Expenses/Expenses";


const App =() => {  

  const deleteHandler = (amount) =>{
    console.log(amount);
    expense = data.filter((item)=>
    item.amount !== amount);
    setData(expense);
    console.log(expense);
  };

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
  const [data, setData] = useState(expense);
  return (
    <div>
      <h2>lets get Started!</h2>
     <Expenses items={data} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
