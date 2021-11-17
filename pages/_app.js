import FullContent from '../components/FullContent';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <FullContent>
      <Component {...pageProps} />
    </FullContent>
  );
};

export default MyApp;
