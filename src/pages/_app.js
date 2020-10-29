import '../styles/index.css';
import { InfoBar, NavBar } from '../components';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <InfoBar>
        Website for{' '}
        <a href="https://gopkg.org" className="text-blue-500 hover:underline">
          gopkg.org
        </a>{' '}
        is under construction
      </InfoBar>
      <Component {...pageProps} />
    </>
  );
};

export default App;
