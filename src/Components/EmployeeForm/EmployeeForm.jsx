import './EmployeeForm.css';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

function EmployeeForm() {

  // --- GLOBAL STORE ---

  // Get the employeeList from the global store
  const employeeList = useSelector(store => store.employeeList);

  // --- LOCAL STORE ---

  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [annualSalary, setAnnualSalary] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    // This effect is watching the employeeList in the global store.
    // (It's added on line 38.) This function will run whenever there
    // is a change in the employeeList in the global store.

    // Whenever there is a change in the employee list,
    // increment the next employee id
    let allEmployeeIds = employeeList.map(e => e.id);
    allEmployeeIds.sort();
    const nextId = allEmployeeIds.pop() + 1;
    setId(nextId);

  }, [employeeList]);


  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setTitle('');
    setAnnualSalary(0);
  }
  
  const handleSave = (event) => {
    event.preventDefault();

    // Call the employeeReducer function, and run
    // the action defined there as 'ADD_EMPLOYEE'
    dispatch({
      type: 'ADD_EMPLOYEE',
      // Send the form values we've been tracking 
      // in the local store as the payload
      payload: {firstName, lastName, id, title, annualSalary} 
    });

    resetForm();
  }

  return (
    <section className='form-wrapper'>
      <Accordion activeIndex={[0]}>
        <AccordionTab header="Add new employee">
          <form onSubmit={handleSave}>
            <InputText placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <InputText placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <InputText placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <InputNumber placeholder="Annual salary" min={0} mode="currency" currency="USD" locale="en-US" value={annualSalary} onChange={(e) => setAnnualSalary(e.value)} />
            <Button label="Save" type="submit" />
          </form>
        </AccordionTab>
      </Accordion>
    </section>
  )
}

export default EmployeeForm;
