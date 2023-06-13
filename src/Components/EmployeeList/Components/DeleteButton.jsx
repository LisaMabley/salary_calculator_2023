import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';

function DeleteButton({employee}) {
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    event.preventDefault();
    // Call the function defined as employeeReducer in index.js.
    // Run the code defined there as the 'REMOVE_EMPLOYEE' action.
    dispatch({
      type: 'REMOVE_EMPLOYEE',
      payload: employee,
    });
  }

  return (
    <Button label="Remove" severity="danger" outlined onClick={handleRemove} />
  )
}

export default DeleteButton;
