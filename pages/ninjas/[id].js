import styles from '../../styles/NinjaItem.module.css';

import { getById } from '../../services/user.service';

const Detail = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
};

export default Detail;

export const getServerSideProps = async (context) => {
  const {
    params: { id },
  } = context;

  const data = await getById(id);
  return {
    props: { data },
  };
};
