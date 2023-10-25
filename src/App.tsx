import tw from 'tailwind-styled-components';

import CmpLayoutFooter from './components/footer/CmpLayoutFooter';
import CmpLayoutHeader from './components/header/CmpLayoutHeader';
import CmpLayoutMain from './components/main/CmpLayoutMain';
import CmpGetStartedCTAFixed from './components/cta/CmpGetStartedCTAFixed';
import CmpLibraryCTA from './components/cta/CmpLibraryCTA';

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
      <CmpGetStartedCTAFixed />
      <MainWrapperPage>
        <CmpLayoutHeader />
        <CmpLayoutMain />
        <CmpLayoutFooter />
      </MainWrapperPage>
      <CmpLibraryCTA />
    </DivApp>
  );
};

export default App;
