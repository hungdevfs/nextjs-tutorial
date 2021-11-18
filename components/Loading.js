import styles from '../styles/components/Loading.component.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles['lds-facebook']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
