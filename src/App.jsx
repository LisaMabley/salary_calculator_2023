import './App.css';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import EmployeeForm from './Components/EmployeeForm/EmployeeForm';
import PageFooter from './Components/PageFooter/PageFooter';
import PageHeader from './Components/PageHeader/PageHeader';
import { useSelector } from 'react-redux';

function App() {
  // useSelector accepts a function
  // which tells us which part of the store we want
  // here we return the whole store, and object
  const reduxStore = useSelector(store => store);
  // reduxStore.count === count (below)

  // get only count from the store, not elementList too
  const count = useSelector(store => store.count);
  // const elementList = useSelector(store => store.elementList);

  // const dispatch = useDispatch();

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
