import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { customRP } from '../../../../utils';
import ImgBgGrainLatest from '../../../../assets/image/img-bg-grain-latest.png';
import { getListObjConvertedByTypeSupport } from '../../../../utils';
import CmpElHeaderTablePricing from './CmpElHeaderTablePricing';
import CmpElRowTablePricing from './CmpElRowTablePricing';
import { listObjPricing } from '../../../../data';

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImgBgGrainLatest})`,
});
const SectionWrapper = tw.section`
relative bg-[size:300px_300px] bg-[position:0px_0px] py-[120px] max-desktop:py-[104px] max-tablet:py-[64px]
`;

const DivContainer = tw.div`
relative z-[2] mx-auto flex w-[90%] max-w-[1360px] flex-col items-stretch justify-center
`;

const DivWrapperIntroduce = tw.div`
mx-auto mb-[56px] flex flex-col items-center justify-center text-center max-tablet:mb-[48px]
`;

const H2Title = tw.h2`
text-[56px] leading-[64px] max-tablet:text-[40px] max-tablet:leading-[48px] max-mobile-landscape:text-[36px] max-mobile-landscape:leading-[44px]
`;

const ParagraphDesc = tw.p`
text-[20px] -tracking-[0.4px] max-desktop:text-[18px]
`;

const DivWrapperTable = tw.div`
rounded-[16px] bg-[color:#161616] p-[40px] max-tablet:px-[24px] max-tablet:py-[32px] max-mobile-landscape:px-[16px] max-mobile-landscape:py-[24px]
`;

const DivHeaderTablePricing = tw.div`
grid gap-[16px] border-none pb-[40px] pt-0 [grid-auto-columns:1fr] [grid-template-rows:auto] [grid-template-columns:0.5fr_1.25fr] max-tablet:[grid-template-columns:1.25fr]
[&>div:nth-last-child(2)]:mb-[24px]
`;

const DivSpacerRow = tw.div`
h-[24px] max-tablet:hidden
`;

const DivDataTablePricing = tw.div`
grid gap-[16px] [grid-auto-columns:1fr] [grid-template-rows:auto] [grid-template-columns:1fr_1fr_1fr]
`;

const DivCaptionPricing = tw.div`
mb-0 text-right text-[14px] leading-[24px] text-[#ffffffcc] max-tablet:text-center
`;

const DivBlurCircleBR = tw.div`
absolute inset-[auto_0%_-15%_auto] -z-[1] flex h-[440px] w-[440px] items-center justify-center rounded-[500px] bg-[image:linear-gradient(132deg,#ff7448_26%,#ff4848_51%,#6248ff_75%)] opacity-[0.97] [filter:blur(64px)_blur(64px)] max-desktop:bottom-[0%] max-desktop:h-[320px] max-desktop:w-[320px] max-desktop:opacity-[0.7] max-desktop:[filter:blur(68px)] max-tablet:h-[280px] max-tablet:w-[280px] max-tablet:opacity-[0.9] max-tablet:[filter:blur(64px)]
`;

const DivBlurCircleTL = tw.div`
absolute inset-[-5%_auto_auto_-5%] -z-[1] block h-[440px] w-[440px] rounded-[500px] bg-[image:linear-gradient(132deg,#ff7448_35%,#ff4848_54%,#6248ff_80%)] opacity-[0.97] [filter:blur(64px)_blur(64px)] max-desktop:-right-[5%] max-desktop:-top-[10%] max-desktop:h-[400px] max-desktop:w-[400px] max-desktop:bg-[image:linear-gradient(285deg,#ff7448_29%,#ff4848_58%,#6248ff_80%)] max-desktop:[filter:blur(68px)] max-tablet:h-[320px] max-tablet:w-[320px] max-mobile-landscape:-right-[20%] max-mobile-landscape:h-[280px] max-mobile-landscape:w-[280px]
`;

const CmpLayoutPricing: FC = () => {
  return (
    <SectionWrapper id="Pricing" style={customRPSectionWrapper}>
      <DivContainer>
        <DivWrapperIntroduce>
          <H2Title>Pricing</H2Title>
          <ParagraphDesc>
            Here’s what it will cost in per-page to convert your design to
            Webflow.
          </ParagraphDesc>
        </DivWrapperIntroduce>
        <DivWrapperTable>
          <DivHeaderTablePricing>
            <DivSpacerRow></DivSpacerRow>
            <DivDataTablePricing>
              {listObjPricing.map((objPricing, idxObjPricing) => {
                return (
                  <CmpElHeaderTablePricing
                    key={idxObjPricing}
                    idxObjPricing={idxObjPricing}
                    objPricing={objPricing}
                  />
                );
              })}
            </DivDataTablePricing>
          </DivHeaderTablePricing>
          {getListObjConvertedByTypeSupport(listObjPricing).map(
            (objRow, idxObjRow) => {
              return <CmpElRowTablePricing key={idxObjRow} objRow={objRow} />;
            },
          )}
          <DivCaptionPricing>Pricing is in USD</DivCaptionPricing>
        </DivWrapperTable>
      </DivContainer>
      <DivBlurCircleBR></DivBlurCircleBR>
      <DivBlurCircleTL></DivBlurCircleTL>
    </SectionWrapper>
  );
};

export default CmpLayoutPricing;
