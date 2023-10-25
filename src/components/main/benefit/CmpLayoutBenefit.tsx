import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { customRP } from '../../../utils';
import ImgBgGrainLatest from '../../../assets/image/img-bg-grain-latest.png';
import { IObjBenefit } from '../../../interface';
import CmpElBenefit from './CmpElBenefit';

type TPropsCmpLayoutBenefit = {
  listObjBenefit: IObjBenefit[];
};

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

const CmpLayoutBenefit: FC<TPropsCmpLayoutBenefit> = ({ listObjBenefit }) => {
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <DivContainer>
        <DivLayoutGrid>
          {listObjBenefit.map((objBenefit, idxObjBenefit) => {
            return <CmpElBenefit key={idxObjBenefit} objBenefit={objBenefit} />;
          })}
        </DivLayoutGrid>
      </DivContainer>
      <div className="bg-blur-circle-bottom-right"></div>
    </SectionWrapper>
  );
};

export default CmpLayoutBenefit;
