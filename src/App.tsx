import tw from 'tailwind-styled-components';

import CmpLayoutFooter from './components/footer/CmpLayoutFooter';
import CmpLayoutHeader from './components/header/CmpLayoutHeader';
import CmpLayoutMain from './components/main/CmpLayoutMain';
import CmpContainerCTAFixed from './components/fixed/CmpContainerFixedCTA';

const DivApp = tw.div`
${(_) => (process.env.NODE_ENV !== 'production' ? 'debug-screens' : '')}
bg-inherit
`;

const MainWrapperPage = tw.main`
overflow-hidden [transform:translate(0px,0px)]
`;

const App = () => {
  return (
    <DivApp>
      <CmpContainerCTAFixed />
      <MainWrapperPage>
        <CmpLayoutHeader />
        <CmpLayoutMain />
        <CmpLayoutFooter />
      </MainWrapperPage>
    </DivApp>
  );
};

export default App;
