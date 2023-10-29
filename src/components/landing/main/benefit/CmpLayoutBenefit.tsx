import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { customRP } from '../../../../utils';
import ImgBgGrainLatest from '../../../../assets/image/img-bg-grain-latest.png';
import CmpElBenefit from './CmpElBenefit';
import { listObjBenefit } from '../../../../data';

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImgBgGrainLatest})`,
});
const SectionWrapper = tw.section`
relative bg-[size:300px_300px] bg-[position:0px_0px] pb-[120px] pt-[40px] max-desktop:pb-[104px] max-tablet:pb-[64px]
`;

const DivContainer = tw.div`
relative z-[2] mx-auto block w-[90%] max-w-[1360px]
`;

const DivLayoutGrid = tw.div`
grid gap-[40px] [grid-auto-columns:1fr] [grid-template-columns:1fr_1fr_1fr_1fr] [grid-template-rows:auto] max-desktop:gap-y-[56px] max-desktop:[grid-template-columns:1fr_1fr] max-mobile-landscape:[grid-template-columns:1fr]
`;

const DivBlurCircle = tw.div`
absolute inset-[auto_0%_-15%_auto] -z-[1] flex h-[440px] w-[440px] items-center justify-center rounded-[500px] bg-[image:linear-gradient(132deg,#ff7448_26%,#ff4848_51%,#6248ff_75%)] opacity-[0.97] [filter:blur(64px)_blur(64px)] max-desktop:h-[320px] max-desktop:w-[320px] max-desktop:[filter:blur(68px)] max-tablet:bottom-[5%] max-tablet:h-[280px] max-tablet:w-[280px] max-tablet:[filter:blur(64px)]
`;

const CmpLayoutBenefit: FC = () => {
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <DivContainer>
        <DivLayoutGrid>
          {listObjBenefit.map((objBenefit, idxObjBenefit) => {
            return <CmpElBenefit key={idxObjBenefit} objBenefit={objBenefit} />;
          })}
        </DivLayoutGrid>
      </DivContainer>
      <DivBlurCircle></DivBlurCircle>
    </SectionWrapper>
  );
};

export default CmpLayoutBenefit;
