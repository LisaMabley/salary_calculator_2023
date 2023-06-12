import './EmployeeForm.css';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

function EmployeeForm() {
  const dispatch = useDispatch();
  const id = useSelector(store => store.nextEmployeeId);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [annualSalary, setAnnualSalary] = useState(0);

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setTitle('');
    setAnnualSalary(0);
  }
  
  const handleSave = (event) => {
    event.preventDefault();

    // tell redux to add new element to elementList reducer
    dispatch({
      type: 'ADD_EMPLOYEE',
      // element name we're tracking in local state
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
