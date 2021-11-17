import Head from 'next/head';
import Link from 'next/link';

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
            <Link href={`/ninjas/${item.id}`} key={item.id}>
              <div className={`cursor-pointer ${styles.single}`}>
                <h4>{item.name}</h4>
              </div>
            </Link>
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
