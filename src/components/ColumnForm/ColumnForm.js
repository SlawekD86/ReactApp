import styles from './ColumnForm.module.scss';
import React, { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const ColumnForm = (props) => {

  const dispatch = useDispatch(); 
  const [title, setValue] = useState(''); 
  const [icon, setIcon] = useState(''); 
  const handleSubmit = (e) => {
    
    e.preventDefault(); 
    dispatch({ type: 'ADD_COLUMN', newColumn: { id: shortid(), title, icon } }); 
    setValue(''); 
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