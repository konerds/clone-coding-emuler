import CmpLayoutFooter from './components/footer/CmpLayoutFooter';
import CmpLayoutHeader from './components/header/CmpLayoutHeader';
import CmpLayoutMain from './components/main/CmpLayoutMain';

const App = () => {
  return (
    <div
      className={`${
        process.env.NODE_ENV !== 'production' ? 'debug-screens' : ''
      }`}
    >
      <CmpLayoutHeader />
      <CmpLayoutMain />
      <CmpLayoutFooter />
    </div>
  );
};

export default App;
