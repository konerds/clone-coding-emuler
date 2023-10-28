import { FC, useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { customRP, queryIsMobile } from '../../../utils';
import ImgBgGradientAngle from '../../../assets/image/img-bg-gradient-angle.png';
import ImgBgGradientAngleMobile from '../../../assets/image/img-bg-gradient-angle-mobile.png';
import { IObjProcessWork } from '../../../interface';
import { useMediaQuery } from 'react-responsive';

type TPropsCmpElProcess = {
  objProcess: IObjProcessWork;
};

const DivWrapperProcess = tw.div`
relative mb-[40px] flex items-center
`;

const DivWrapperStep = tw.div`
flex min-w-[120px] flex-[0_0_auto] items-center justify-start py-[16px] max-desktop:absolute max-desktop:inset-[-19px_auto_auto_24px] max-desktop:min-w-[auto] max-desktop:py-0 max-tablet:left-[16px]
`;

const ImgCircleStep = tw.img`
relative z-[2] overflow-hidden [border-color:#161616_black] [border-style:none] [border-width:8px_1px]
`;

const DivLineBlack = tw.div`
absolute left-[19px] right-[20px] h-[72px] w-[2px] bg-[color:#0a0a0a] max-desktop:hidden
`;

const DivWrapperInfo = tw.div`
flex flex-[1_1_0%] items-center rounded-[16px] border-[2px] border-white p-[24px] max-desktop:items-start max-tablet:flex-col max-tablet:p-[16px]
`;

const DivBlockImage = tw.div`
flex h-[240px] w-[240px] items-center justify-center rounded-[12px] bg-cover bg-[position:50%_50%] max-tablet:mb-[24px] max-tablet:w-full
`;

const ImgInfoStep = tw.img``;

const DivBlockIntroduce = tw.div`
static ml-[24px] flex flex-[1_1_0%] flex-col items-start justify-center max-tablet:ml-0
`;

const H4Title = tw.h4`
mb-[12px] text-white max-tablet:mb-[8px] max-tablet:text-[24px] max-tablet:leading-[32px]
`;

const ParagraphDescSentence = tw.p`
mb-[24px] text-[20px] -tracking-[0.4px] text-white max-desktop:text-[18px] max-tablet:mb-[16px]
`;

const ParagraphDescParagraph = tw.p`
text-[#ffffffa6]
`;

const CmpElProcess: FC<TPropsCmpElProcess> = ({ objProcess }) => {
  const isMobile = useMediaQuery(queryIsMobile());
  const [customRPDivBlockImage, setCustomRPDivBlockImage] =
    useState<React.CSSProperties>({});
  useEffect(() => {
    setCustomRPDivBlockImage(
      customRP({
        backgroundImage: `url(${
          isMobile ? ImgBgGradientAngleMobile : ImgBgGradientAngle
        })`,
      }),
    );
  }, [isMobile]);
  return (
    <DivWrapperProcess>
      <DivWrapperStep>
        <ImgCircleStep src={objProcess.iconStep} loading="lazy" />
        <DivLineBlack></DivLineBlack>
      </DivWrapperStep>
      <DivWrapperInfo>
        <DivBlockImage style={customRPDivBlockImage}>
          <ImgInfoStep src={objProcess.image} loading="lazy" />
        </DivBlockImage>
        <DivBlockIntroduce>
          <H4Title>{objProcess.title}</H4Title>
          <ParagraphDescSentence>
            {objProcess.desc.sentence}
          </ParagraphDescSentence>
          <ParagraphDescParagraph>
            {objProcess.desc.paragraph}
          </ParagraphDescParagraph>
        </DivBlockIntroduce>
      </DivWrapperInfo>
    </DivWrapperProcess>
  );
};

export default CmpElProcess;
