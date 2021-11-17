import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/components/Navbar.component.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src="/images/logo.png" width={150} height={60} />
      </div>
      <div className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Ninja list</Link>
      </div>
    </div>
  );
};

export default Navbar;
