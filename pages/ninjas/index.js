import Head from 'next/head';

import styles from '../../styles/NinjaList.module.css';

const NinjaList = ({ data }) => {
  return (
    <>
      <Head>
        <title>Ninja List | List</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1>Ninja list</h1>
        <div className={styles.list}>
          {data.map((item) => (
            <div key={item.id} className={`cursor-pointer ${styles.single}`}>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NinjaList;

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return { props: { data } };
};
