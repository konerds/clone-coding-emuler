import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { customRP } from '../../../../utils';
import ImgBgGrainLatest from '../../../../assets/image/img-bg-grain-latest.png';
import { listObjFAQ } from '../../../../data';
import CmpElFAQ from './CmpElFAQ';

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImgBgGrainLatest})`,
});
const SectionWrapper = tw.section`
relative bg-[size:300px_300px] bg-[position:0px_0px] py-[120px] max-desktop:py-[104px] max-tablet:py-[64px]
`;

const DivContainer = tw.div`
relative z-[2] mx-auto flex w-[90%] max-w-[1360px] flex-col items-center justify-center
`;

const DivWrapperIntroduce = tw.div`
mx-auto mb-[80px] flex flex-col items-center justify-center text-center max-desktop:mb-[72px] max-tablet:mb-[64px]
`;

const H2Introduce = tw.h2`
text-[56px] leading-[64px] max-tablet:text-[40px] max-tablet:leading-[48px] max-mobile-landscape:text-[36px] max-mobile-landscape:leading-[44px]
`;

const DivWrapperFAQ = tw.div`
mb-[56px] w-auto max-w-[720px] [border-top:2px_none_#161616] max-tablet:mb-[48px] max-tablet:pr-0
`;

const H4PostScript = tw.h4`
max-tablet:text-[24px] max-tablet:leading-[32px]
`;

const ParagraphPostScript = tw.p`
mb-[40px] text-center text-[20px] -tracking-[0.4px] max-desktop:text-[18px]
`;

const ButtonContactUs = tw.button`
inline-block flex-[1_1_0%] rounded-[8px] border-[2px] border-black bg-white px-[24px] py-[12px] text-center text-[14px] leading-[inherit] text-black [text-decoration:none] hover:bg-[color:#00000026]
`;

const DivBlurCircle = tw.div`
absolute inset-[auto_0%_-15%_auto] -z-[1] flex h-[440px] w-[440px] items-center justify-center rounded-[500px] bg-[image:linear-gradient(132deg,#ff7448_26%,#ff4848_51%,#6248ff_75%)] opacity-[0.97] [filter:blur(64px)_blur(64px)] max-desktop:bottom-[0%] max-desktop:h-[320px] max-desktop:w-[320px] max-desktop:opacity-[0.7] max-desktop:[filter:blur(68px)] max-tablet:h-[280px] max-tablet:w-[280px] max-tablet:opacity-[0.9] max-tablet:[filter:blur(64px)]
`;

const CmpLayoutFAQ: FC = () => {
  return (
    <SectionWrapper id="FAQ" style={customRPSectionWrapper}>
      <DivContainer>
        <DivWrapperIntroduce>
          <H2Introduce>Frequently asked questions</H2Introduce>
        </DivWrapperIntroduce>
        <DivWrapperFAQ>
          {listObjFAQ.map((objFAQ, idxObjFAQ) => {
            return <CmpElFAQ key={idxObjFAQ} objFAQ={objFAQ} />;
          })}
        </DivWrapperFAQ>
        <H4PostScript>Have more questions?</H4PostScript>
        <ParagraphPostScript>
          Just reach out, we’re always around to answer any questions.
        </ParagraphPostScript>
        <ButtonContactUs type="button">contact us</ButtonContactUs>
      </DivContainer>
      <DivBlurCircle></DivBlurCircle>
    </SectionWrapper>
  );
};

export default CmpLayoutFAQ;
