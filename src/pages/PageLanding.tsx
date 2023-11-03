import { FC, useRef } from 'react';
import tw from 'tailwind-styled-components';
import CmpCTAFixed from '../components/shared/CmpCTAFixed';
import CmpLayoutHeader from '../components/shared/header/CmpLayoutHeader';
import CmpLayoutMain from '../components/landing/main/CmpLayoutMain';
import CmpLayoutFooter from '../components/landing/footer/CmpLayoutFooter';
import CmpLibraryCTA from '../components/landing/cta/CmpLibraryCTA';
import { getHeightWindow, getPositionScrollWindow } from '../utils';

const MainWrapperPage = tw.main`
overflow-hidden [transform:translate(0px,0px)]
`;

const PageLanding: FC = () => {
  const posTopScroll = getPositionScrollWindow('y');
  const heightWindow = getHeightWindow();
  const refSectionWrapperProcess = useRef<HTMLElement>(null);
  const refSectionWrapperContact = useRef<HTMLElement>(null);
  return (
    <>
      <CmpCTAFixed
        textBtn="get started"
        href="#Get-Started"
        posTopScroll={posTopScroll}
        refSectionWrapperProcess={refSectionWrapperProcess}
        refSectionWrapperContact={refSectionWrapperContact}
      />
      <MainWrapperPage>
        <CmpLayoutHeader />
        <CmpLayoutMain
          posTopScroll={posTopScroll}
          heightWindow={heightWindow}
          refSectionWrapperProcess={refSectionWrapperProcess}
          refSectionWrapperContact={refSectionWrapperContact}
        />
        <CmpLayoutFooter />
      </MainWrapperPage>
      <CmpLibraryCTA />
    </>
  );
};

export default PageLanding;
