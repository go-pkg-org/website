import '../styles/index.css';
import { InfoBar, NavBar } from '../components';

const Footer = () => (
  <div className="bg-white overflow-hidden bottom border-t border-gray-200 mt-20">
    <div className="max-w-screen-xl mx-auto mt-10">
      <div className="relative z-10 pb-8 bg-white mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
          Gopkg
        </h3>
        <p className="mt-2 text-base leading-6 text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
        <p className="mt-2 leading-6 text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0 text-xs">
          © {new Date().getFullYear()} Gopkg
        </p>
      </div>
    </div>
  </div>
);

const App = ({ Component, pageProps }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavBar />
      <main className="mb-auto">
        <InfoBar>
          Website for{' '}
          <a href="https://gopkg.org" className="text-blue-500 hover:underline">
            gopkg.org
          </a>{' '}
          is under construction
        </InfoBar>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
