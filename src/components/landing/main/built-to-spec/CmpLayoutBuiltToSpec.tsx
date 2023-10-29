import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { customRP } from '../../../../utils';
import ImgBgGrainLatest from '../../../../assets/image/img-bg-grain-latest.png';
import IconUnderlineLong from '../../../../assets/image/icon/icon-underline-long.svg';
import CmpElProjectSpec from './CmpElProjectSpec';
import { listObjExBuiltToSpec } from '../../../../data';

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImgBgGrainLatest})`,
});
const SectionWrapper = tw.section`
relative bg-[size:300px_300px] bg-[position:0px_0px] py-[120px] max-desktop:py-[104px] max-tablet:py-[64px]
`;

const DivContainer = tw.div`
relative z-[2] mx-auto block w-[90%] max-w-[1360px]
`;

const DivWrapperIntroduce = tw.div`
mx-auto mb-[56px] flex flex-col items-center justify-center text-center max-tablet:mb-[48px]
`;

const H2Title = tw.h2`
text-[56px] leading-[64px] max-tablet:text-[40px] max-tablet:leading-[48px] max-mobile-landscape:text-[36px] max-mobile-landscape:leading-[44px]
`;

const customRPSpanWithUnderline = customRP({
  backgroundImage: `url(${IconUnderlineLong})`,
});
const SpanWithUnderline = tw.span`
inline-block bg-contain bg-[position:50%_100%] bg-no-repeat px-[2px] pb-[8px] pt-[4px] max-desktop:pb-[4px] max-desktop:pt-[2px]
`;

const ParagraphDesc = tw.p`
text-[20px] -tracking-[0.4px] max-desktop:text-[18px]
`;

const DivBlurCircle = tw.div`
absolute inset-[0%_-5%_auto_auto] -z-[1] block h-[440px] w-[440px] rounded-[500px] bg-[image:linear-gradient(132deg,#ff7448_35%,#ff4848_54%,#6248ff_80%)] opacity-[0.97] [filter:blur(64px)_blur(64px)] max-desktop:h-[400px] max-desktop:w-[400px] max-desktop:opacity-[0.7] max-desktop:[filter:blur(68px)] max-desktop:[image:linear-gradient(285deg,#ff7448_29%,#ff4848_58%,#6248ff_80%)] max-tablet:top-[2%] max-tablet:h-[320px] max-tablet:w-[320px] max-tablet:opacity-[0.9] max-tablet:[filter:blur(64px)] max-mobile-landscape:-right-[20%] max-mobile-landscape:h-[280px] max-mobile-landscape:w-[280px]
`;

const CmpLayoutBuiltToSpec: FC = () => {
  return (
    <SectionWrapper id="Our-Work" style={customRPSectionWrapper}>
      <DivContainer>
        <DivWrapperIntroduce>
          <H2Title>
            Websites we've{' '}
            <SpanWithUnderline style={customRPSpanWithUnderline}>
              built to spec
            </SpanWithUnderline>
          </H2Title>
          <ParagraphDesc>
            See for yourself, compare the design and development.
          </ParagraphDesc>
        </DivWrapperIntroduce>
        {listObjExBuiltToSpec.map((objEx, idxObjEx) => {
          return <CmpElProjectSpec key={idxObjEx} objEx={objEx} />;
        })}
      </DivContainer>
      <DivBlurCircle></DivBlurCircle>
    </SectionWrapper>
  );
};

export default CmpLayoutBuiltToSpec;
