import ExpenseItem from "./componets/ExpenseItem";

function App() {
 
  const expense =[
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
    <div className="App">
    <ExpenseItem title={expense[0].title} 
    amount={expense[0].amount} 
    date={expense[0].date}>
    </ExpenseItem>

    <ExpenseItem title={expense[1].title} 
    amount={expense[1].amount} 
    date={expense[1].date}>
    </ExpenseItem>

    <ExpenseItem title={expense[2].title} 
    amount={expense[2].amount} 
    date={expense[2].date}>
    </ExpenseItem>

    <ExpenseItem title={expense[3].title} 
    amount={expense[3].amount} 
    date={expense[3].date}>
    </ExpenseItem>

   

    </div>
  );
}

export default App;
