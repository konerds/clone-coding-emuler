import CmpLayoutFooter from './components/footer/CmpLayoutFooter';
import CmpLayoutHeader from './components/header/CmpLayoutHeader';
import CmpLayoutMain from './components/main/CmpLayoutMain';
import ImgBgGrainLatest from './assets/image/bg-grain-latest.png';

const App = () => {
  return (
    <div
      style={{ backgroundImage: `url(${ImgBgGrainLatest})` }}
      className={`${
        process.env.NODE_ENV !== 'production' ? 'debug-screens ' : ''
      }bg-[#d8d5d1]`}
    >
      <CmpLayoutHeader />
      <CmpLayoutMain />
      <CmpLayoutFooter />
    </div>
  );
};

export default App;
