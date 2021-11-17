import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/404.module.css';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return (
    <div className={styles.container}>
      <h3>404</h3>
      <p>
        Go to <Link href="/">home page</Link>
      </p>
    </div>
  );
};

export default NotFound;
