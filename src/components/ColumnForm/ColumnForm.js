import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addColumn } from '../../redux/store';

const ColumnForm = (props) => {

  const dispatch = useDispatch(); // tworzy funkcję dispatch, która pozwala na wywołanie akcji
  const [title, setValue] = useState(''); // tworzy stan dla inputa i przypisuje mu wartość początkową '' (pusty string)
  const [icon, setIcon] = useState(''); // tworzy stan dla inputa i przypisuje mu wartość początkową '' (pusty string)
  const handleSubmit = (e) => {
    // tworzy funkcję, która będzie wywoływana po kliknięciu w przycisk
    e.preventDefault(); // zapobiega przeładowaniu strony po kliknięciu w przycisk
    dispatch(addColumn({ id: shortid(), title, icon })); // wywołuje akcję ADD_COLUMN i przekazuje do niej obiekt z tytułem i ikoną
    setValue(''); // czyści pole input po dodaniu nowej kolumny
    setIcon('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
        <span>Title:</span> <input type="text" value={title} onChange={(e) => setValue(e.target.value)} className={styles.inputStyle} />
        <span className={styles.inputText}>Icon: </span><input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} className={styles.inputStyle} />
        <Button>ADD COLUMN</Button>
    </form>
  );
};
export default ColumnForm;