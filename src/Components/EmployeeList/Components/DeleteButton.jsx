import { Button } from 'primereact/button';
import './DeleteButton.css';
import { useDispatch } from 'react-redux';

function DeleteButton({id}) {
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    event.preventDefault();
    dispatch({
      type: 'REMOVE_EMPLOYEE',
      payload: id,
    });
  }

  return (
    <Button label="Remove" severity="danger" outlined onClick={handleRemove} />
  )
}

export default DeleteButton;
