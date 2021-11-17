import styles from '../../styles/NinjaItem.module.css';

const Detail = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.website}</p>
    </div>
  );
};

export default Detail;

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const {
    params: { id },
  } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};
