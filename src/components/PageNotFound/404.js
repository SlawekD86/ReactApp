import styles from './404.module.scss';

const NotFound = () => {
  return (
    <div className={styles.NotFoundContainer}>
      <h1 className={styles.NotFoundError}>404</h1>
      <p className={styles.NotFound}>Page Not Found</p>
    </div>
  );
};
export default NotFound;