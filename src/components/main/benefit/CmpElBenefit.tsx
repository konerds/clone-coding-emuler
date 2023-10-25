import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { IObjBenefit } from '../../../interface';
import IconCMSUserFriendly from '../../../assets/image/icon/icon-cms-user-friendly.svg';

type TPropsCmpElBenefit = {
  objBenefit: IObjBenefit;
};

const DivWrapperBenefit = tw.div``;

const DivWrapperImageIcon = tw.div`
mb-[16px] max-mobile-landscape:flex max-mobile-landscape:items-center
`;

const ImageIconBenefit = tw.img`
mb-[16px] mr-0 max-mobile-landscape:mb-0 max-mobile-landscape:mr-[12px] max-mobile-landscape:w-[32px]
`;

const H4TitleBenefit = tw.h4`
my-0 max-tablet:text-[24px] max-tablet:leading-[32px]
`;

const ParagraphDescBenefit = tw.p``;

const CmpElBenefit: FC<TPropsCmpElBenefit> = ({ objBenefit }) => {
  return (
    <DivWrapperBenefit>
      <DivWrapperImageIcon>
        <ImageIconBenefit src={IconCMSUserFriendly} alt="benefit icon" />
        <H4TitleBenefit>{objBenefit.title}</H4TitleBenefit>
      </DivWrapperImageIcon>
      <ParagraphDescBenefit>{objBenefit.desc}</ParagraphDescBenefit>
    </DivWrapperBenefit>
  );
};

export default CmpElBenefit;
