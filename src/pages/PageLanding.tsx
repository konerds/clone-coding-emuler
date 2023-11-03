import { FC, useState } from 'react';
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
  const [posYSectionWrapperProcess, setPosYSectionWrapperProcess] = useState<
    [number, number]
  >([0, 0]);
  const [posYSectionWrapperContact, setPosYSectionWrapperContact] = useState<
    [number, number]
  >([0, 0]);
  return (
    <>
      <CmpCTAFixed
        textBtn="get started"
        href="#Get-Started"
        objPosSectionForLanding={{
          posYSectionWrapperProcess: posYSectionWrapperProcess,
          posYSectionWrapperContact: posYSectionWrapperContact,
        }}
      />
      <MainWrapperPage>
        <CmpLayoutHeader />
        <CmpLayoutMain
          setPosYSectionWrapperProcess={setPosYSectionWrapperProcess}
          setPosYSectionWrapperContact={setPosYSectionWrapperContact}
        />
        <CmpLayoutFooter />
      </MainWrapperPage>
      <CmpLibraryCTA />
    </>
  );
};

export default PageLanding;
