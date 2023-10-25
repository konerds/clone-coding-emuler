import { FC, useState, createElement } from 'react';
import tw from 'tailwind-styled-components';
import { customRP } from '../../../utils';
import ImgBgGrainLatest from '../../../assets/image/img-bg-grain-latest.png';
import { ReactComponent as IconFigma } from '../../../assets/image/icon/icon-figma.svg';
import { ReactComponent as IconWebflow } from '../../../assets/image/icon/icon-webflow.svg';
import { IObjExBuiltToSpec } from '../../../interface';

type TPropsCmpContentBuiltToSpec = {
  listObjExBuiltToSpec: IObjExBuiltToSpec[];
};

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImgBgGrainLatest})`,
});
const SectionWrapper = tw.section`
relative bg-[size:300px_300px] bg-[position:0px_0px] py-[120px] max-desktop:py-[104px] max-tablet:py-[64px]
`;

const CmpContentBuiltToSpec: FC<TPropsCmpContentBuiltToSpec> = ({
  listObjExBuiltToSpec,
}) => {
  const [isTypeFigma, setIsTypeFigma] = useState(true);
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <div className="bg-blur-circle-top-right"></div>
      <div className="relative z-[10] px-[5%] py-[64px]">
        <div className="mb-[48px] text-center">
          <div className="mb-[24px] mt-[16px] text-[36px] font-medium leading-[44px] -tracking-[1.92px]">
            Websites we've built to spec
          </div>
          <div className="mb-[10px] inline-block text-[18px] leading-[1.5] -tracking-[0.4px]">
            See for yourself, compare the design and development.
          </div>
        </div>
        {listObjExBuiltToSpec.map((objEx, idxObjEx) => {
          return (
            <div
              key={idxObjEx}
              className="mb-[40px] rounded-[16px] border-[2px] bg-white p-[16px]"
            >
              <div className="mb-[24px]">
                <div className="mb-[16px]">
                  <div className="mb-[12px] text-[24px] font-medium leading-[32px] -tracking-[0.48px]">
                    {objEx.name}
                  </div>
                  <div
                    style={{ backgroundColor: objEx.colorBadgeType }}
                    className="flex w-fit rounded-[8px] px-[8px] py-[6px]"
                  >
                    <span className="text-[12px] font-bold leading-[12px] tracking-[0.6px]">
                      {objEx.type}
                    </span>
                  </div>
                </div>
                <div className="text-[18px] font-medium leading-[28px] -tracking-[0.48px]">
                  {objEx.quoteClient}
                </div>
              </div>
              <div className="mb-[24px] flex [&>button:nth-child(1)]:mr-[32px]">
                {[true, false].map((flagBtn, idxBtn) => {
                  return (
                    <button
                      key={idxBtn}
                      type="button"
                      className={`flex items-center justify-center py-[8px]${
                        flagBtn === isTypeFigma
                          ? ' border-b-[2px] border-black'
                          : ' border-b-[2px] border-transparent'
                      }`}
                      onClick={() => {
                        setIsTypeFigma(flagBtn);
                      }}
                    >
                      {createElement(flagBtn ? IconFigma : IconWebflow, {
                        className: 'mr-[12px] h-[24px] w-[24px]',
                      })}
                      <span className="text-[14px] font-bold leading-[20px] tracking-[0.1px]">
                        {flagBtn ? 'DESIGN' : 'LIVE WEBSITE'}
                      </span>
                    </button>
                  );
                })}
              </div>
              {/* <iframe
                width="100%"
                height="390.29px"
                src={isTypeFigma ? objEx.linkFigma : objEx.linkWeb}
                allowFullScreen
              ></iframe> */}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default CmpContentBuiltToSpec;
