import styles from './CardForm.module.scss';
import React, { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addCard } from '../../redux/cardsRedux';

const CardForm = (props) => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addCard({id: shortid(), title, columnId: props.columnId}));
    setTitle('');
  };

  return <form className={styles.cardForm} onSubmit={handleSubmit}>
    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className={styles.inputStyle}/>
    <Button>Add card</Button>
  </form>;
};

export default CardForm;