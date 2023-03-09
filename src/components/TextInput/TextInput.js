import styles from './TextInput.scss';

const TextInput = props => {
    return <input className={styles.input} placeholder={props.placeholder} type="text" />
}

export default TextInput;