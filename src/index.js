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
  // Here we define two actions that components can perform with 
  // the employeeList in the local store: adding and removing an employee.
  // These action types can be defined with any name you choose.
  if (action.type === 'ADD_EMPLOYEE') {
    // Here we define what we want to happen when an employee is added
    const newEmployee = action.payload;
    const updatedEmployeeList = employees.concat(newEmployee);
    return updatedEmployeeList;

  } else if (action.type === 'REMOVE_EMPLOYEE') {
    const departingEmployeeId = action.payload.id;
    const allEmployeesMinusDepartingOne = employees.filter(e => e.id !== departingEmployeeId);
    return allEmployeesMinusDepartingOne;
  }

  // If the action isn't one of the above two, just return the unchanged list
  return employees;
}

// --- STORE ---

// This is the global store that will be accessible 
// in every component of our app, if needed
const storeInstance = createStore(
  // Combine reducers defined above
  // Normally you will see more than just the one we're using here.
  combineReducers(
    {
      employeeList: employeeListReducer,
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
