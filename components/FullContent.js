import Navbar from './Navbar';
import Footer from './Footer';

import styles from '../styles/components/FullContent.component.module.css';

const FullContent = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default FullContent;
