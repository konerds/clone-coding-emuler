import { FC, useRef, useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { customRP, queryByMaxWidth } from '../../../../utils';
import ImgBgGrainLatest from '../../../../assets/image/img-bg-grain-latest.png';
import IconUnderlineLong from '../../../../assets/image/icon/icon-underline-long.svg';
import ImgBgGradientAngleMobile from '../../../../assets/image/img-bg-gradient-angle-mobile.png';
import ImgBgGradientAngle from '../../../../assets/image/img-bg-gradient-angle.png';
import CmpElTeam from './CmpElTeam';
import CmpElRoster from './CmpElRoster';
import CmpElBadgeCapability from './CmpElBadgeCapability';
import { useMediaQuery } from 'react-responsive';
import { EViewport, IObjRoster, IObjTeam } from '../../../../interface';
import {
  getListCapability,
  getListObjRoster,
  getListObjTeam,
} from '../../../../api';

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
mx-auto mb-[56px] flex max-w-[720px] flex-col items-center justify-center text-center max-tablet:mb-[48px]
`;

const H2Title = tw.h2`
text-[56px] leading-[64px] max-tablet:text-[40px] max-tablet:leading-[48px] max-mobile-landscape:text-[36px] max-mobile-landscape:leading-[44px]
`;

const customRPSpanWithUnderline = customRP({
  backgroundImage: `url(${IconUnderlineLong})`,
});
const SpanWithUnderlineLong = tw.span`
inline-block bg-contain bg-[position:50%_100%] bg-no-repeat px-[2px] pb-[8px] pt-[4px] max-desktop:pb-[4px] max-desktop:pt-[2px]
`;

const ParagraphDesc = tw.p`
max-w-[560px] text-[20px] -tracking-[0.4px] max-desktop:text-[18px]
`;

const DivWrapperGridTeam = tw.div`
mb-[40px] grid gap-[16px_40px] [grid-auto-columns:1fr] [grid-template-columns:1fr_1fr] [grid-template-rows:auto] max-desktop:gap-y-[5vw] max-desktop:[grid-template-columns:1fr] max-tablet:mb-[24px] max-tablet:gap-y-[24px]
`;

const DivPanelRoster = tw.div`
flex items-center rounded-[16px] bg-[color:#161616] p-[24px] max-desktop:items-start max-tablet:flex-col max-tablet:p-[16px]
`;

const DivWrapperImageRoster = tw.div`
relative flex h-[192px] min-h-[192px] w-[192px] min-w-[192px] flex-col items-center justify-start overflow-hidden rounded-[12px] bg-cover bg-[position:50%_50%] px-[18px] max-tablet:mb-[24px] max-tablet:w-full
`;

const DivContainerLoop = tw.div`
will-change-transform [transform-style:preserve-3d]
`;

const DivWrapperWidthFull = tw.div`
w-full
`;

const DivWrapperDetailRoster = tw.div`
ml-[40px] flex items-center max-desktop:flex-col max-desktop:items-start max-tablet:ml-0
`;

const DivWrapperTextDetail = tw.div`
mr-[40px] w-[55%] max-desktop:mb-[24px] max-desktop:w-full
`;

const H6TextDetail = tw.h6`
text-[14px] leading-[22px] tracking-[0.7px] text-white
`;

const H4TextDetail = tw.h4`
mb-[16px] mt-0 text-[32px] leading-[40px] -tracking-[0.8px] text-white
`;

const ParagraphTextDetail = tw.p`
text-[#ffffffa6]
`;

const DivWrapperListCapability = tw.div`
w-[45%] max-desktop:w-full
`;

const H6TextTitleCapability = tw.h6`
mb-[24px] text-[14px] leading-[22px] tracking-[0.7px] text-white
`;

const DivWrapperListBadge = tw.div`
`;

const DivBlurCircle = tw.div`
absolute inset-[auto_auto_-10%_-5%] -z-[1] block h-[440px] w-[440px] rounded-[500px] bg-[image:linear-gradient(334deg,#ff7448_18%,#ff4848_59%,#6248ff_86%)] opacity-[0.97] [filter:blur(64px)_blur(64px)] max-desktop:right-auto max-desktop:h-[320px] max-desktop:w-[320px] max-desktop:bg-[image:linear-gradient(132deg,#ff7448_31%,#ff4848_57%,#6248ff_79%)] max-desktop:opacity-[0.7] max-desktop:[filter:blur(68px)] max-tablet:-left-[20%] max-tablet:h-[280px] max-tablet:w-[280px] max-tablet:bg-[image:linear-gradient(132deg,#ff7448_29%,#ff4848_52%,#6248ff_75%)] max-tablet:opacity-[0.9] max-tablet:[filter:blur(64px)]
`;

const CmpLayoutTeam: FC = () => {
  const isMobile = useMediaQuery(queryByMaxWidth(EViewport.TABLET));
  const [positionScrollYLoopRoster, setPositionScrollYLoopRoster] = useState(0);
  const [customRPDivWrapperImageRoster, setCustomRPDivWrapperImageRoster] =
    useState<React.CSSProperties>({});
  const [heightDivWrapperWidthFull, setHeightDivWrapperWidthFull] = useState(0);
  const refDivWrapperWidthFull = useRef<HTMLDivElement>(null);
  const [listObjTeam, setListObjTeam] = useState<IObjTeam[]>([]);
  const [listObjRoster, setListObjRoster] = useState<IObjRoster[]>([]);
  const [listCapability, setListCapability] = useState<string[]>([]);
  useEffect(() => {
    getListObjTeam().then((dataListObjTeam) => {
      if (!!dataListObjTeam) {
        setListObjTeam(dataListObjTeam);
      }
    });
    getListObjRoster().then((dataListObjRoster) => {
      if (!!dataListObjRoster) {
        setListObjRoster(dataListObjRoster);
      }
    });
    getListCapability().then((dataListCapability) => {
      if (!!dataListCapability) {
        setListCapability(dataListCapability);
      }
    });
  }, []);
  useEffect(() => {
    if (!!refDivWrapperWidthFull.current) {
      const observerResize = new ResizeObserver(() => {
        const heightNew =
          refDivWrapperWidthFull.current?.getBoundingClientRect().height;
        if (!!heightNew) {
          setHeightDivWrapperWidthFull(heightNew);
        }
      });
      observerResize.observe(refDivWrapperWidthFull.current);
      return () => {
        observerResize.disconnect();
      };
    }
  }, [refDivWrapperWidthFull.current]);
  useEffect(() => {
    if (!!heightDivWrapperWidthFull) {
      const keyInterval = setInterval(() => {
        setPositionScrollYLoopRoster((valuePrev) => {
          const positionNew = valuePrev - 1;
          return Math.abs(positionNew) >= heightDivWrapperWidthFull + 8
            ? 0
            : positionNew;
        });
      }, 50);
      return () => {
        clearInterval(keyInterval);
      };
    }
  }, [heightDivWrapperWidthFull]);
  useEffect(() => {
    setCustomRPDivWrapperImageRoster(
      customRP({
        backgroundImage: `url(${
          isMobile ? ImgBgGradientAngleMobile : ImgBgGradientAngle
        })`,
      }),
    );
  }, [isMobile]);
  return (
    <SectionWrapper id="Team" style={customRPSectionWrapper}>
      <DivContainer>
        <DivWrapperIntroduce>
          <H2Title>
            {'Meet the team that cares about '}
            <SpanWithUnderlineLong style={customRPSpanWithUnderline}>
              good design
            </SpanWithUnderlineLong>
          </H2Title>
          <ParagraphDesc>Meet our company founders Dan and Adam</ParagraphDesc>
        </DivWrapperIntroduce>
        <DivWrapperGridTeam>
          {listObjTeam.map((objTeam, idxObjTeam) => {
            return <CmpElTeam key={idxObjTeam} objTeam={objTeam} />;
          })}
        </DivWrapperGridTeam>
        <DivPanelRoster>
          <DivWrapperImageRoster style={customRPDivWrapperImageRoster}>
            <DivContainerLoop
              style={{
                transform: `translate3d(0px, ${positionScrollYLoopRoster}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              }}
            >
              {Array.from({ length: 2 }).map((_, idxArrRepeat) => {
                return (
                  <DivWrapperWidthFull
                    key={idxArrRepeat}
                    ref={
                      idxArrRepeat === 0 ? refDivWrapperWidthFull : undefined
                    }
                  >
                    {listObjRoster.map((objRoster, idxObjRoster) => {
                      return (
                        <CmpElRoster key={idxObjRoster} objRoster={objRoster} />
                      );
                    })}
                  </DivWrapperWidthFull>
                );
              })}
            </DivContainerLoop>
          </DivWrapperImageRoster>
          <DivWrapperDetailRoster>
            <DivWrapperTextDetail>
              <H6TextDetail>supported by</H6TextDetail>
              <H4TextDetail>The Relume Roster</H4TextDetail>
              <ParagraphTextDetail>
                The Relume Roster is an exclusive, flexible and dynamic team of
                Webflow Experts that assist Dan and Adam in executing projects
                for Relume.
              </ParagraphTextDetail>
            </DivWrapperTextDetail>
            <DivWrapperListCapability>
              <H6TextTitleCapability>capabilities</H6TextTitleCapability>
              <DivWrapperListBadge>
                {listCapability.map((badgeCapability, idxBadgeCapability) => {
                  return (
                    <CmpElBadgeCapability
                      key={idxBadgeCapability}
                      badgeCapability={badgeCapability}
                    />
                  );
                })}
              </DivWrapperListBadge>
            </DivWrapperListCapability>
          </DivWrapperDetailRoster>
        </DivPanelRoster>
      </DivContainer>
      <DivBlurCircle></DivBlurCircle>
    </SectionWrapper>
  );
};

export default CmpLayoutTeam;
