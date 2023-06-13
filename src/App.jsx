import './App.css';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import EmployeeForm from './Components/EmployeeForm/EmployeeForm';
import PageFooter from './Components/PageFooter/PageFooter';
import PageHeader from './Components/PageHeader/PageHeader';

function App() {
  return (
    <div>
      <PageHeader />
      <EmployeeForm />
      <EmployeeList />
      <PageFooter />
    </div>
  );
}

export default App;
