import { Card } from 'primereact/card';
import './EmployeeCard.css';
import DeleteButton from './DeleteButton';
import { formatAsUSD } from '../../../utils/formatAsUSD'

// Deconstructing the employee object to import only the properties 
// we need here for the EmployeeCard is a good way to keep things simple 
// and reduce memory required
function EmployeeCard({employee}) {
    const { id, firstName, lastName, title, annualSalary } = employee;
    const formattedSalary = formatAsUSD(annualSalary);

    const footer = (
        <div className="card-footer">
            <DeleteButton id={id}/>
        </div>
    );

  return (
    <Card className="emp-card" title={`${firstName} ${lastName}`} subTitle={title} footer={footer}>
       <p>
            <strong>Id:</strong> {id}
       </p>
       <p>
            <strong>Annual Salary:</strong> {formattedSalary}
       </p>
    </Card>
  )
}

export default EmployeeCard;