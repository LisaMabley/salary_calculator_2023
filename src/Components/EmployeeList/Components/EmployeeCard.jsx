import { Card } from 'primereact/card';
import './EmployeeCard.css';
import DeleteButton from './DeleteButton';
import { formatAsUSD } from '../../../utils/formatAsUSD'

function EmployeeCard({employee}) {
    const { id, firstName, lastName, title, annualSalary } = employee;
    const formattedSalary = formatAsUSD(annualSalary);

    const footer = (
        <div className="card-footer">
            <DeleteButton employee={employee}/>
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