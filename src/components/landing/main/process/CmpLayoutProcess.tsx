import { memo, useState, useEffect, useLayoutEffect } from 'react';

import { tw, usePositionScrollWindow } from '../../../../utils';
import CmpElProcess from './CmpElProcess';
import { EViewport, IObjProcessWork } from '../../../../interface';
import { getListObjProcessWork } from '../../../../api';
import { getHeightByRef, queryByMaxWidth } from '../../../../utils';
import { useMediaQuery } from 'react-responsive';

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
absolute inset-[0%] w-[2px] bg-white will-change-[width,_height]
`;

const DivWrapperProcess = tw.div`
relative
`;

type TPropsCmpLayoutProcess = {
  heightWindow: number;
  refSectionWrapper: React.RefObject<HTMLElement>;
};

const CmpLayoutProcess = ({
  heightWindow,
  refSectionWrapper,
}: TPropsCmpLayoutProcess) => {
  const posTopScroll = usePositionScrollWindow();
  const isWithinTablet = useMediaQuery(queryByMaxWidth(EViewport.DESKTOP));
  const [customRPDivLineWhite, setCustomRPDivLineWhite] =
    useState<React.CSSProperties>({});
  const [listObjProcessWork, setListObjProcessWork] = useState<
    IObjProcessWork[]
  >([]);
  const heightRefSectionWrapper = getHeightByRef(refSectionWrapper);
  const [percentageLineWhite, setPercentageLineWhite] = useState(0);
  useLayoutEffect(() => {
    getListObjProcessWork().then((dataListObjProcessWork) => {
      if (dataListObjProcessWork) {
        setListObjProcessWork(dataListObjProcessWork);
      }
    });
  }, []);
  useEffect(() => {
    if (!isWithinTablet && refSectionWrapper.current) {
      const positionTopRelative =
        refSectionWrapper.current.getBoundingClientRect().top -
        heightWindow / 26;
      if (positionTopRelative < 0) {
        const percentageLineWhiteNew = Math.abs(positionTopRelative) / 13;
        setPercentageLineWhite(
          percentageLineWhiteNew > 100 ? 100 : percentageLineWhiteNew,
        );
      } else {
        setPercentageLineWhite(0);
      }
    }
  }, [
    isWithinTablet,
    posTopScroll,
    heightWindow,
    refSectionWrapper.current,
    heightRefSectionWrapper,
  ]);
  useEffect(() => {
    if (!isWithinTablet) {
      setCustomRPDivLineWhite({
        height: `${percentageLineWhite}%`,
      });
    }
  }, [percentageLineWhite]);
  return (
    <SectionWrapper id="How-It-works" ref={refSectionWrapper}>
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
              <DivLineWhite style={customRPDivLineWhite}></DivLineWhite>
            </DivLineGrey>
          </DivWrapperTimeline>
          <DivWrapperProcess>
            {listObjProcessWork.map((objProcess, idxObjProcess) => {
              const numHelperSubtract = (idxArr: number) => {
                return idxArr === 0
                  ? 0
                  : idxArr === lenListObjProcessWork - 1
                    ? 8
                    : 2;
              };
              const lenListObjProcessWork = listObjProcessWork.length;
              const listCollapse = Array.from({
                length: lenListObjProcessWork,
              }).map((_, idxArr) => {
                const DEFAULT_PERCENTAGE = 100 / (lenListObjProcessWork - 1);
                const limitMin =
                  DEFAULT_PERCENTAGE * idxArr - numHelperSubtract(idxArr);
                return limitMin || 1;
              });
              const percentageLineWhiteCalculated = !isWithinTablet
                ? (percentageLineWhite - listCollapse[idxObjProcess]) /
                  numHelperSubtract(idxObjProcess)
                : undefined;
              const percentageLineWhiteCurrent =
                percentageLineWhiteCalculated !== undefined
                  ? percentageLineWhiteCalculated < 0.15
                    ? 0.15
                    : percentageLineWhiteCalculated > 1
                      ? 1
                      : percentageLineWhiteCalculated
                  : percentageLineWhiteCalculated;
              return (
                <CmpElProcess
                  key={idxObjProcess}
                  objProcess={objProcess}
                  percentageLineWhiteCurrent={percentageLineWhiteCurrent}
                />
              );
            })}
          </DivWrapperProcess>
        </DivLayoutGrid>
      </DivContainer>
    </SectionWrapper>
  );
};

export default memo(CmpLayoutProcess);
