import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const DuMMYEXPENSES = [
    {
      id: "el1",
      title: "Car Insurance",
      amount: 296.9,
      date: new Date(2021, 2, 28),
    },
    {
      id: "el2",
      title: "Toilet Paper",
      amount: 296.9,
      date: new Date(2021, 2, 28),
    },
    {
      id: "el3",
      title: "New TV",
      amount: 306.9,
      date: new Date(2021, 2, 28),
    },
  ];

  const [expenses, setExpenses] = useState(DuMMYEXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExp) => {
      return [expense, ...prevExp];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
