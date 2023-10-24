import { FC, useState } from 'react';
import { ReactComponent as IconFigma } from '../../../assets/image/icon/icon-figma.svg';
import { ReactComponent as IconWebflow } from '../../../assets/image/icon/icon-webflow.svg';
import { IObjExBuiltToSpec } from '../../../interface';

type TPropsCmpContentBuiltToSpec = {
  listObjExBuiltToSpec: IObjExBuiltToSpec[];
};

const CmpContentBuiltToSpec: FC<TPropsCmpContentBuiltToSpec> = ({
  listObjExBuiltToSpec,
}) => {
  const [isTypeFigma, setIsTypeFigma] = useState(true);
  return (
    <section className="relative px-[5%] py-[64px]">
      <div className="bg-blur-circle-top-right"></div>
      <div className="relative z-[10] mb-[48px] text-center">
        <div className="mb-[24px] mt-[16px] text-[36px] font-medium leading-[44px]">
          Websites we've
          <br />
          built to spec
        </div>
        <div className="mb-[10px] inline-block text-[18px] leading-[1.5]">
          See for yourself, compare the
          <br />
          design and development.
        </div>
      </div>
      {listObjExBuiltToSpec.map((objEx, idxObjEx) => {
        return (
          <div
            key={idxObjEx}
            className="relative z-[10] mb-[40px] rounded-[16px] border-[2px] bg-white p-[16px]"
          >
            <div className="mb-[24px]">
              <div className="mb-[16px]">
                <div className="mb-[12px] text-[24px] font-medium leading-[32px]">
                  {objEx.name}
                </div>
                <div
                  style={{ backgroundColor: objEx.colorBadgeType }}
                  className="flex w-fit rounded-[8px] px-[8px] py-[6px]"
                >
                  <span className="text-[12px] font-bold leading-[12px]">
                    {objEx.type}
                  </span>
                </div>
              </div>
              <div className="text-[18px] font-medium leading-[28px]">
                {objEx.quoteClient}
              </div>
            </div>
            <div className="mb-[24px] flex">
              <button
                type="button"
                className={`mr-[32px] flex items-center justify-center py-[8px]${
                  isTypeFigma
                    ? ' border-b-[2px] border-black'
                    : ' border-b-[2px] border-transparent'
                }`}
                onClick={() => {
                  setIsTypeFigma(true);
                }}
              >
                <IconFigma className="mr-[12px] h-[24px] w-[24px]" />
                <span className="text-[14px] font-bold leading-[20px]">
                  DESIGN
                </span>
              </button>
              <button
                type="button"
                className={`flex items-center justify-center py-[8px]${
                  !isTypeFigma
                    ? ' border-b-[2px] border-black'
                    : ' border-b-[2px] border-transparent'
                }`}
                onClick={() => {
                  setIsTypeFigma(false);
                }}
              >
                <IconWebflow className="mr-[12px] h-[24px] w-[24px]" />
                <span className="text-[14px] font-bold leading-[20px]">
                  LIVE WEBSITE
                </span>
              </button>
            </div>
            {isTypeFigma ? (
              <iframe
                className="rounded-lg"
                width="100%"
                height="390.29px"
                src={objEx.linkFigma}
                allowFullScreen
              ></iframe>
            ) : (
              <iframe
                className="rounded-lg"
                width="100%"
                height="390.29px"
                src={objEx.linkWeb}
                allowFullScreen
              ></iframe>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CmpContentBuiltToSpec;
