import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';     
import 'primereact/resources/primereact.min.css';
import App from './App';
import staffData from './data/currentStaff'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// --- REDUCERS ---

// These functions define how all components of the app can interact 
// with the information in the local store

const employeeListReducer = (employees = staffData.currentStaff, action) => {
  if (action.type === 'ADD_EMPLOYEE') {
    console.log('HIRING:', action.payload);
    return [...employees, action.payload];
  } else if (action.type === 'REMOVE_EMPLOYEE') {
    return employees.filter(e => e.id !== action.payload);
  }

  return employees;
}

const nextEmployeeIdReducer = (id = staffData.nextEmployeeId, action) => {
  return id;
}

const monthlyStaffingExpenseReducer = () => {
    let annualTotal = 0;
    staffData.currentStaff.forEach(staffMember => {
      annualTotal += staffMember.annualSalary;
    });
    return annualTotal / 12;
}

// --- STORE ---

// local state - available only within a component function
// let [count, setCount] = useState(0);
// setCount(newValue) ---- handled by reducers' actions
const storeInstance = createStore(
  // Combine the two reducers defined above
  combineReducers(
    {
      nextEmployeeId: nextEmployeeIdReducer, 
      employeeList: employeeListReducer,
    }
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
