import { FC } from 'react';
import tw from 'tailwind-styled-components';
import CmpCTAFixed from '../components/shared/CmpCTAFixed';
import CmpLayoutHeader from '../components/shared/header/CmpLayoutHeader';
import CmpLayoutMain from '../components/landing/main/CmpLayoutMain';
import CmpLayoutFooter from '../components/landing/footer/CmpLayoutFooter';
import CmpLibraryCTA from '../components/landing/cta/CmpLibraryCTA';

const MainWrapperPage = tw.main`
overflow-hidden [transform:translate(0px,0px)]
`;

const PageLanding: FC = () => {
  return (
    <>
      <CmpCTAFixed textBtn="get started" href="#Get-Started" />
      <MainWrapperPage>
        <CmpLayoutHeader />
        <CmpLayoutMain />
        <CmpLayoutFooter />
      </MainWrapperPage>
      <CmpLibraryCTA />
    </>
  );
};

export default PageLanding;
