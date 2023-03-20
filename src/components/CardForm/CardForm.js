import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.inputStyle} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;
