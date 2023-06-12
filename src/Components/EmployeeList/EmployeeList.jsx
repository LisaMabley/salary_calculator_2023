import { useSelector } from 'react-redux';
import './EmployeeList.css';
import EmployeeCard from './Components/EmployeeCard';

function EmployeeList({ handleDelete }) {

  const employeeList = useSelector(store => store.employeeList);

  return (
    <section className='container'>
      {/* The double ampersands in the line below are used to evaluate whether the employeeList 
      has length, and (only if true) map through it. This pattern prevents null reference errors 
      in cases when the employee data may not have loaded yet. */}
      {employeeList.length ? employeeList.map((employee) => {
        return <EmployeeCard key={employee.id} employee={employee} />
      }) : <p>No employees added yet.</p>
      }
    </section>
  )
}

export default EmployeeList;
