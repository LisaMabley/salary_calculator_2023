import { useSelector } from 'react-redux';
import './EmployeeList.css';
import EmployeeCard from './Components/EmployeeCard';

function EmployeeList() {

  // --- GLOBAL STORE ---

  // Get the employeeList from the global store
  const employeeList = useSelector(store => store.employeeList);

  // Get the daysWithoutAccidents from the global store
  // (Not used/implemented, this is just here as an example.)
  const daysWithoutAccidents = useSelector(store => store.daysWithoutAccidents);

  return (
    <section className='container'>
      {/* Use a ternary to conditionally render either the list of employees, 
      or, if there are no employees in the list, display something else so 
      the user knows the page is blank for a reason (that's not an error). */}
      {employeeList.length ? employeeList.map((employee) => {
        return <EmployeeCard key={employee.id} employee={employee} />
      }) : <p>No employees added yet.</p>
      }
    </section>
  )
}

export default EmployeeList;
