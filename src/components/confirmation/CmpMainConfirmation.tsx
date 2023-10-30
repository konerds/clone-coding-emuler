import { FC } from 'react';
import tw from 'tailwind-styled-components';
import IconCircleOutlined from '../../assets/image/icon/icon-circle-outlined.svg';

const DivWrapper = tw.div`
relative flex h-screen flex-col items-center justify-start bg-[#0a0a0a] pb-[120px] pt-[180px] max-desktop:pb-[104px] max-tablet:pb-[64px]
`;

const DivContainer = tw.div`
relative z-[2] mx-auto flex w-[90%] max-w-[1360px] flex-col items-center justify-center
`;

const DivWrapperHeading = tw.div`
mb-[24px] flex items-center text-white max-tablet:mb-[16px]
`;

const ImgIconCircleOutlined = tw.img`
mr-[16px] [filter:invert(100%)] max-desktop:w-[48px] max-tablet:w-[40px] max-mobile-landscape:w-[32px]
`;

const H3Heading = tw.h3`
my-0 text-white max-desktop:text-[48px] max-desktop:leading-[56px] max-tablet:text-[36px] max-tablet:leading-[44px] max-mobile-landscape:text-[32px] max-mobile-landscape:leading-[40px]
`;

const ParagraphHeadingSub = tw.p`
mb-[24px] max-w-[560px] text-center text-[24px] text-white max-desktop:text-[20px]
`;

const ParagraphCloseWindow = tw.p`
text-[#ffffffa6]
`;

const CmpMainConfirmation: FC = () => {
  return (
    <DivWrapper>
      <DivContainer>
        <DivWrapperHeading>
          <ImgIconCircleOutlined
            src={IconCircleOutlined}
            loading="lazy"
            alt=""
          />
          <H3Heading>Thanks for enquiring</H3Heading>
        </DivWrapperHeading>
        <ParagraphHeadingSub>
          {`We'll be in touch shortly via email to organise a time to discuss the project in more detail. `}
        </ParagraphHeadingSub>
        <ParagraphCloseWindow>You can close this window.</ParagraphCloseWindow>
      </DivContainer>
    </DivWrapper>
  );
};

export default CmpMainConfirmation;
