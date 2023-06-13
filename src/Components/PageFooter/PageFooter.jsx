import { formatAsUSD } from '../../utils/formatAsUSD';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Message } from 'primereact/message';

function PageFooter() {

  // --- GLOBAL STORE ---

  // Get the employeeList from the global store
  const employeeList = useSelector(store => store.employeeList);

  // --- LOCAL STORE ---

  const [monthlyExpense, setMonthlyExpense] = useState(formatAsUSD(0));
  const [monthlyBudget] = useState(20000);
  const [monthlyBudgetExceeded, setMonthlyBudgetExceeded] = useState(false);

  // --- EFFECTS ---

  useEffect(() => {
    // This effect is watching the employeeList in the global store.
    // (It's added on line 42.) This function will run whenever there
    // is a change in the employeeList in the global store.

    // Whenever there is a change in the employee list,
    // recalculate the monthly salary expense
    let annualExpense = 0;
    employeeList.forEach(e => {
      annualExpense += e.annualSalary;
    })
    const monthlyExp = annualExpense / 12;

    // Set the result in the local store
    setMonthlyExpense(formatAsUSD(monthlyExp));

    // Also calculate if the above amount is within budget or not
    // and set that in the local store
    const budgetExceeded = monthlyExp > monthlyBudget ? true : false;
    setMonthlyBudgetExceeded(budgetExceeded);

  }, [employeeList]);

  return (
    <footer className="page-footer">
      <h2>
        Total Monthly Expense: {monthlyExpense} 
        {monthlyBudgetExceeded && <Message severity="error" text="Monthly Budget Exceeded" />}</h2>
    </footer>
  )
}

export default PageFooter;
