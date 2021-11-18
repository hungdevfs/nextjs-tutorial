import FullContent from '../components/FullContent';
import 'nprogress/nprogress.css';
import '../styles/globals.css';

import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';

const MyApp = ({ Component, pageProps }) => {
  const { loading } = useFetch();
  return (
    <FullContent>
      {loading && <Loading />}
      <Component {...pageProps} />
    </FullContent>
  );
};

export default MyApp;
