import React from 'react';
import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = (props) => {
  
  const dispatch = useDispatch(); 
  const [title, setValue] = useState(''); 
  const [icon, setIcon] = useState(''); 
  const handleSubmit = (e) => {
    
    e.preventDefault(); 
    dispatch(addColumn({ id: shortid(), title, icon, listId: props.listId })); 
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