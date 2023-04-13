import React, { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addList } from '../../redux/listsRedux';
import styles from './ListForm.module.scss';

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addList({ id: shortid(), title, description }));
    setTitle('');
    setDescription('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span>Title:</span> <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.inputStyle} />
      <span className={styles.inputText}>Description: </span>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className={styles.inputStyle} />
      <Button>ADD LIST</Button>
    </form>
  );
};

export default ListForm;