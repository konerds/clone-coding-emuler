import { memo, useRef } from 'react';

import { tw } from '../utils';
import CmpCTAFixed from '../components/shared/CmpCTAFixed';
import CmpLayoutHeader from '../components/shared/header/CmpLayoutHeader';
import CmpLayoutMain from '../components/landing/main/CmpLayoutMain';
import CmpLayoutFooter from '../components/landing/footer/CmpLayoutFooter';
import CmpLibraryCTA from '../components/landing/cta/CmpLibraryCTA';

const MainWrapperPage = tw.main`
overflow-hidden [transform:translate(0px,0px)]
`;

const PageLanding = () => {
  const refSectionWrapperProcess = useRef<HTMLElement>(null);
  const refSectionWrapperContact = useRef<HTMLElement>(null);
  return (
    <>
      <CmpCTAFixed
        textBtn="get started"
        href="#Get-Started"
        refSectionWrapperProcess={refSectionWrapperProcess}
        refSectionWrapperContact={refSectionWrapperContact}
      />
      <MainWrapperPage>
        <CmpLayoutHeader />
        <CmpLayoutMain
          refSectionWrapperProcess={refSectionWrapperProcess}
          refSectionWrapperContact={refSectionWrapperContact}
        />
        <CmpLayoutFooter />
      </MainWrapperPage>
      <CmpLibraryCTA />
    </>
  );
};

export default memo(PageLanding);
