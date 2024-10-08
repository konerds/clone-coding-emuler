import { memo, useState } from 'react';

import { tw } from '../../../../utils';
import { IObjExBuiltToSpec } from '../../../../interface';
import IconFigma from '../../../../assets/image/icon/icon-figma.svg';
import IconWebflow from '../../../../assets/image/icon/icon-webflow.svg';

type TPropsCmpElProjectSpec = {
  objEx: IObjExBuiltToSpec;
};

const DivWrapperProjectSpec = tw.div`
mb-[40px] flex w-full flex-col justify-start rounded-[16px] border-[2px] border-[#161616] bg-white p-[24px] max-tablet:p-[16px]
`;

const DivWrapperIntroduce = tw.div`
mb-[24px] flex items-start justify-between max-desktop:flex-col
`;

const DivWrapperTitle = tw.div`
flex items-center max-desktop:mb-[16px] max-desktop:w-full max-desktop:justify-between max-tablet:flex-col max-tablet:items-start
`;

const H5Name = tw.h5`
my-0 mr-[32px] max-tablet:mb-[12px] max-tablet:mr-0 max-tablet:whitespace-nowrap
`;

const DivWrapperBadge = tw.div`
inline-block rounded-[8px] bg-[color:#d4eff0] px-[8px] py-[6px]
`;

const DivBadgeText = tw.div`
whitespace-nowrap text-[12px] font-bold uppercase leading-[12px] tracking-[0.6px] text-black [text-decoration:none]
`;

const DivWrapperQuote = tw.div`
w-[50%] max-desktop:w-full
`;

const H5Quote = tw.h5`
my-0 text-[20px] leading-[30px] max-tablet:text-[18px] max-tablet:leading-[28px]
`;

const SpanAuthor = tw.span``;

const DivWrapperPreview = tw.div`
relative
`;

const DivListTab = tw.div`
relative mb-[24px] flex justify-start
`;

type TPropsButtonTab = {
  $isSelected: boolean;
};
const ButtonTab = tw.button<TPropsButtonTab>`
relative mr-[32px] flex min-w-max max-w-full cursor-pointer items-center border-b-[2px] bg-transparent px-0 py-[8px] text-left align-top text-[#222222] opacity-100 transition-all duration-300 ease-[ease] [text-decoration:none] hover:transform-none hover:bg-transparent hover:shadow-none
${(p) =>
  p.$isSelected
    ? '[border-bottom-color:#161616]'
    : '[border-bottom-color:transparent]'}
`;

const ImgIconTab = tw.img`
mr-[12px] w-[24px]
`;

const DivNameTab = tw.div`
text-[13px] font-bold uppercase tracking-[0.28px] text-[#0a0a0a] [text-decoration:none] mobile-landscape:text-[14px]
`;

const DivContentTab = tw.div`
relative block overflow-hidden
`;

const DivWrapperContent = tw.div`
relative block [transition:opacity_300ms_ease_0s]
`;

const DivEmbed = tw.div`
relative h-[520px] w-full overflow-hidden rounded-[12px] max-tablet:h-[480px] max-mobile-landscape:h-[400px]
`;

const DivWrapperFigma = tw.div`
h-full w-full
`;

const IframeFigma = tw.iframe`
[border:0px_solid_#0000001a]
`;

const DivWrapperWeb = tw.div`
absolute inset-[0%_auto_auto_0%] -left-[50%] -mt-[175px] h-[870px] w-[200%] scale-[0.6] rounded-[12px] max-desktop:-left-[12.5%] max-desktop:-mt-[88px] max-desktop:w-[125%] max-desktop:scale-[0.8]
`;

const IframeWeb = tw.iframe`
absolute left-0 top-0 h-full w-full
`;

const ButtonShowEmbed = tw.button`
absolute bottom-0 left-0 right-0 top-0 bg-[color:#d4eff0] text-[16px]
`;

const CmpElProjectSpec = ({ objEx }: TPropsCmpElProjectSpec) => {
  const [isTypeFigma, setIsTypeFigma] = useState(true);
  const [isVisibleEmbed, setIsVisibleEmbed] = useState(false);
  const handleClickTab = (flagBtn: boolean) => {
    setIsVisibleEmbed(false);
    setIsTypeFigma(flagBtn);
  };
  return (
    <DivWrapperProjectSpec>
      <DivWrapperIntroduce>
        <DivWrapperTitle>
          <H5Name>{objEx.name}</H5Name>
          <DivWrapperBadge>
            <DivBadgeText>{objEx.type}</DivBadgeText>
          </DivWrapperBadge>
        </DivWrapperTitle>
        <DivWrapperQuote>
          <H5Quote>
            {`"${objEx.quoteClient.content}" `}
            <SpanAuthor>- {objEx.quoteClient.author}</SpanAuthor>
            <br />
          </H5Quote>
        </DivWrapperQuote>
      </DivWrapperIntroduce>
      <DivWrapperPreview>
        <DivListTab>
          {[true, false].map((flagBtn, idxBtn) => {
            return (
              <ButtonTab
                key={idxBtn}
                type="button"
                $isSelected={flagBtn === isTypeFigma}
                onClick={() => handleClickTab(flagBtn)}
              >
                <ImgIconTab src={flagBtn ? IconFigma : IconWebflow} />
                <DivNameTab>{flagBtn ? 'design' : 'live website'}</DivNameTab>
              </ButtonTab>
            );
          })}
        </DivListTab>
        <DivContentTab>
          <DivWrapperContent>
            <DivEmbed>
              {isVisibleEmbed ? (
                <>
                  {isTypeFigma ? (
                    <DivWrapperFigma>
                      <IframeFigma
                        src={objEx.link.figma}
                        width="100%"
                        height="100%"
                        allowFullScreen
                      ></IframeFigma>
                    </DivWrapperFigma>
                  ) : (
                    <DivWrapperWeb>
                      <IframeWeb
                        src={objEx.link.web}
                        frameBorder={0}
                        allowFullScreen
                      ></IframeWeb>
                    </DivWrapperWeb>
                  )}
                </>
              ) : (
                <ButtonShowEmbed
                  type="button"
                  onClick={() => setIsVisibleEmbed(true)}
                >
                  Click to view
                </ButtonShowEmbed>
              )}
            </DivEmbed>
          </DivWrapperContent>
        </DivContentTab>
      </DivWrapperPreview>
    </DivWrapperProjectSpec>
  );
};

export default memo(CmpElProjectSpec);
