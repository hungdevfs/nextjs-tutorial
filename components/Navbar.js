import Link from 'next/link';

import styles from '../styles/components/Navbar.component.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja list</Link>
    </div>
  );
};

export default Navbar;
