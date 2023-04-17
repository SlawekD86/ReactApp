import React, { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addList } from '../../redux/listsRedux';
import styles from './ListForm.module.scss';

const ListForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addList({ id: shortid(), ...formData }));
    setFormData({ title: '', description: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span>Title:</span>{' '}
      <input
        type="text"
        value={formData.title}
        onChange={handleChange}
        name="title"
        className={styles.inputStyle}
      />
      <span className={styles.inputText}>Description: </span>
      <input
        type="text"
        value={formData.description}
        onChange={handleChange}
        name="description"
        className={styles.inputStyle}
      />
      <Button>ADD LIST</Button>
    </form>
  );
};

export default ListForm;