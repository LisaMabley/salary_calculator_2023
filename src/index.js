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

// Define how all components of the app can interact 
// with the information in the global store

const employeeListReducer = (employees = staffData.currentStaff, action) => {
  // Define actions that components can perform with the employeeList in the global store.
  // Add as many action types as you need, and name them whatever you want.

  if (action.type === 'ADD_EMPLOYEE') {
    // Define what we want to happen when this function is called 
    // with the action.type defined as 'ADD_EMPLOYEE'
    const newEmployee = action.payload;
    const updatedEmployeeList = employees.concat(newEmployee);
    return updatedEmployeeList;

  } else if (action.type === 'REMOVE_EMPLOYEE') {
    // Define what we want to happen when this function is called 
    // with the action.type defined as 'REMOVE_EMPLOYEE'
    const departingEmployeeId = action.payload.id;
    const allEmployeesMinusDepartingOne = employees.filter(e => e.id !== departingEmployeeId);
    return allEmployeesMinusDepartingOne;
  }

  // If the action isn't one of the above two, just return the unchanged list
  return employees;
}

const daysWithoutAccidentReducer = (days = staffData.daysWithoutAccidents, action) => {
  // Define actions that components can perform with the 
  // daysWithoutAccidentCount in the global store

  if (action.type === 'RESET') {
    // Define what we want to happen when this function is called 
    // with the action.type defined as 'RESET'
    return 0;
  }

  // If the action isn't one defined above, just return the number of days, unchanged
  return days;
}

// --- STORE ---

// This is the global store that will be accessible 
// in every component of our app, if needed
const storeInstance = createStore(
  // Combine all reducers defined above
  combineReducers(
    {
      employeeList: employeeListReducer,
      daysWithoutAccidentCount: daysWithoutAccidentReducer,
    }
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* The provider is the redux part, that's what makes this store globally accessible */}
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
