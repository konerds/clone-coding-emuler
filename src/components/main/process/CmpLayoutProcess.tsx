import { FC } from 'react';
import tw from 'tailwind-styled-components';
import CmpElProcess from './CmpElProcess';
import { listObjProcessWork } from '../../../data';

const SectionWrapper = tw.section`
relative bg-[color:#0a0a0a] pb-[120px] pt-[120px] max-desktop:py-[104px] max-tablet:py-[64px]
`;

const DivContainer = tw.div`
relative z-[2] mx-auto block w-[90%] max-w-[1360px]
`;

const DivWrapperIntroduce = tw.div`
mx-auto mb-[56px] flex max-w-[720px] flex-col items-center justify-center text-center max-tablet:mb-[48px]
`;

const H2Title = tw.h2`
text-[56px] leading-[64px] text-white max-tablet:text-[40px] max-tablet:leading-[48px] max-mobile-landscape:text-[36px] max-mobile-landscape:leading-[44px]
`;

const ParagraphDesc = tw.p`
text-[20px] -tracking-[0.4px] text-white max-desktop:text-[18px]
`;

const DivLayoutGrid = tw.div`
relative z-[2] mx-auto block w-[90%] max-w-[920px] max-desktop:w-full max-desktop:max-w-none
`;

const DivWrapperTimeline = tw.div`
absolute flex h-full w-[40px] items-center justify-center overflow-hidden max-desktop:hidden
`;

const DivLineGrey = tw.div`
relative h-[82%] w-[2px] bg-[color:#ffffff26]
`;

const DivLineWhite = tw.div`
absolute inset-[0%] w-[2px] bg-white
`;

const DivWrapperProcess = tw.div`
relative
`;

const CmpLayoutProcess: FC = () => {
  return (
    <SectionWrapper>
      <DivContainer>
        <DivWrapperIntroduce>
          <H2Title>How it works</H2Title>
          <ParagraphDesc>
            As highly experienced Webflow experts, Relume will carefully
            translate your designs to code using Webflow best practices.
          </ParagraphDesc>
        </DivWrapperIntroduce>
        <DivLayoutGrid>
          <DivWrapperTimeline>
            <DivLineGrey>
              <DivLineWhite></DivLineWhite>
            </DivLineGrey>
          </DivWrapperTimeline>
          <DivWrapperProcess>
            {listObjProcessWork.map((objProcess, idxObjProcess) => {
              return (
                <CmpElProcess key={idxObjProcess} objProcess={objProcess} />
              );
            })}
          </DivWrapperProcess>
        </DivLayoutGrid>
      </DivContainer>
    </SectionWrapper>
  );
};

export default CmpLayoutProcess;
