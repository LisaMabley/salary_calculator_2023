import { formatAsUSD } from '../../utils/formatAsUSD';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Message } from 'primereact/message';

function PageFooter() {
  const employeeList = useSelector(store => store.employeeList);
  const [monthlyExpense, setMonthlyExpense] = useState(formatAsUSD(0));
  const [monthlyBudget] = useState(20000);
  const [monthlyBudgetExceeded, setMonthlyBudgetExceeded] = useState(false);

  const updateMonthlyExpense = useEffect(() => {
    let annualExpense = 0;
    employeeList.forEach(e => {
      annualExpense += e.annualSalary;
    })
    const monthlyExp = annualExpense / 12;

    setMonthlyExpense(formatAsUSD(monthlyExp));

    const budgetExceeded = monthlyExp > monthlyBudget ? true : false;
    setMonthlyBudgetExceeded(budgetExceeded);

  }, [employeeList]);

  return (
    <footer className="page-footer">
      <h2>
        Total Monthly Expense: {monthlyExpense} 
        {monthlyBudgetExceeded && <Message severity="error" sticky={true} closable={true} text="Monthly Budget Exceeded" />}</h2>
    </footer>
  )
}

export default PageFooter;
