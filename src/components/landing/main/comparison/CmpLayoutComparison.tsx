import { memo, useState, useRef, useEffect } from 'react';

import { tw, usePositionScrollWindow } from '../../../../utils';
import { customRP, getHeightByRef } from '../../../../utils';
import ImgBgGrainLatest from '../../../../assets/image/img-bg-grain-latest.png';
import IconUnderline from '../../../../assets/image/icon/icon-underline.svg';
import CmpElContentTab from './CmpElContentTab';
import CmpElMenuTab from './CmpElMenuTab';

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
mx-auto mb-[56px] flex max-w-[800px] flex-col items-center justify-center text-center max-tablet:mb-[48px]
`;

const H2Title = tw.h2`
text-[56px] leading-[64px] max-tablet:text-[40px] max-tablet:leading-[48px] max-mobile-landscape:text-[36px] max-mobile-landscape:leading-[44px]
`;

const customRPSpanWithUnderline = customRP({
  backgroundImage: `url(${IconUnderline})`,
});
const SpanWithUnderline = tw.span`
inline-block bg-contain bg-[position:50%_115%] bg-no-repeat px-[2px] pb-[8px] pt-[4px] max-desktop:pb-[4px] max-desktop:pt-[2px] max-tablet:bg-[position:50%_110%]
`;

const ParagraphDesc = tw.p`
max-w-[640px] text-[20px] -tracking-[0.4px] max-desktop:text-[18px]
`;

const DivWrapperWithRelume = tw.div`
relative
`;

const DivListTab = tw.div`
relative mb-[56px] flex justify-center max-tablet:mb-[48px] [&>button:nth-child(1)]:mr-[32px]
`;

const DivContentTab = tw.div`
relative flex items-center justify-center overflow-hidden
`;

const DivBlurCircle = tw.div`
absolute inset-[30%_auto_auto_5%] flex h-[440px] w-[440px] items-center justify-center rounded-[500px] bg-[image:linear-gradient(59deg,#ff7448_27%,#ff4848_50%,#6248ff_75%)] opacity-[0.97] [filter:blur(64px)_blur(64px)] max-desktop:top-[20%] max-desktop:h-[320px] max-desktop:w-[320px] max-desktop:opacity-[0.8] max-desktop:[filter:blur(68px)] max-tablet:h-[280px] max-tablet:w-[280px] max-tablet:opacity-[0.9] max-tablet:[filter:blur(64px)] max-mobile-landscape:top-[20%]
`;

type TPropsCmpLayoutComparison = {
  heightWindow: number;
};

const CmpLayoutComparison = ({ heightWindow }: TPropsCmpLayoutComparison) => {
  const posTopScroll = usePositionScrollWindow();
  const [isWithRelume, setIsWithRelume] = useState(true);
  const refImageWillBeLoaded = useRef<HTMLImageElement>(null);
  const heightMinImageDefault = getHeightByRef(refImageWillBeLoaded);
  const [customRPDivContentTab, setCustomRPDivContentTab] =
    useState<React.CSSProperties>({});
  const refDivWrapperWithRelume = useRef<HTMLImageElement>(null);
  const heightDivWrapperWithRelume = getHeightByRef(refDivWrapperWithRelume);
  const [positionXImageOverlay, setPositionXImageOverlay] = useState(0);
  useEffect(() => {
    if (!!heightMinImageDefault) {
      setCustomRPDivContentTab({
        minHeight: `${heightMinImageDefault}px`,
      });
    }
  }, [heightMinImageDefault]);
  useEffect(() => {
    if (
      refDivWrapperWithRelume.current &&
      !!heightDivWrapperWithRelume &&
      heightWindow
    ) {
      const collapseAdded = heightWindow / 10;
      const posXNew =
        15 -
        (Math.abs(
          heightDivWrapperWithRelume * 1.5 -
            refDivWrapperWithRelume.current.getBoundingClientRect().top,
        ) /
          (collapseAdded + heightDivWrapperWithRelume)) *
          15;
      if (posXNew >= 0 && posXNew <= 15) {
        setPositionXImageOverlay(posXNew);
      }
    }
  }, [
    posTopScroll,
    heightWindow,
    refDivWrapperWithRelume.current,
    heightDivWrapperWithRelume,
  ]);
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <DivContainer>
        <DivWrapperIntroduce>
          <H2Title>
            Don’t compromise your design with{' '}
            <SpanWithUnderline style={customRPSpanWithUnderline}>
              average
            </SpanWithUnderline>{' '}
            web development
          </H2Title>
          <ParagraphDesc>
            You've gone to all this effort to create your beautiful design -
            don't compromise with average development. We guarantee pixel
            perfect design and smooth interactions that delight your users.
          </ParagraphDesc>
        </DivWrapperIntroduce>
        <DivWrapperWithRelume ref={refDivWrapperWithRelume}>
          <DivListTab>
            {[true, false].map((flagBtn, idxBtn) => {
              return (
                <CmpElMenuTab
                  key={idxBtn}
                  flagBtn={flagBtn}
                  isWithRelume={isWithRelume}
                  setIsWithRelume={setIsWithRelume}
                />
              );
            })}
          </DivListTab>
          <DivContentTab style={customRPDivContentTab}>
            <CmpElContentTab
              isWithRelume={isWithRelume}
              refImageWillBeLoaded={refImageWillBeLoaded}
              positionXImageOverlay={positionXImageOverlay}
            />
          </DivContentTab>
        </DivWrapperWithRelume>
      </DivContainer>
      <DivBlurCircle></DivBlurCircle>
    </SectionWrapper>
  );
};

export default memo(CmpLayoutComparison);
