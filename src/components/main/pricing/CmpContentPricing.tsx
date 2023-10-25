import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { customRP } from '../../../utils';
import ImgBgGrainLatest from '../../../assets/image/img-bg-grain-latest.png';
import { ReactComponent as IconTick } from '../../../assets/image/icon/icon-tick.svg';
import { IObjPricing } from '../../../interface';
import {
  capitalizeLetterFirst,
  getListObjConvertedByTypeSupport,
  getTypeConvertedPricingToPublic,
} from '../../../utils';

type TPropsCmpContentPricing = {
  listObjPricing: IObjPricing[];
};

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImgBgGrainLatest})`,
});
const SectionWrapper = tw.section`
relative bg-[size:300px_300px] bg-[position:0px_0px] py-[120px] max-desktop:py-[104px] max-tablet:py-[64px]
`;

const CmpContentPricing: FC<TPropsCmpContentPricing> = ({ listObjPricing }) => {
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <div className="bg-blur-circle-top-left"></div>
      <div className="relative z-[10] px-[5%] py-[64px] text-center">
        <div className="mb-[48px]">
          <div className="mb-[24px] mt-[16px] text-[36px] font-medium leading-[44px] -tracking-[1.92px]">
            Pricing
          </div>
          <div className="-trackint-[0.4px] mb-[10px] inline-block text-[18px] leading-[1.5]">
            Here's what it will cost in per-page to convert your design to
            Webflow.
          </div>
        </div>
        <div className="rounded-[16px] bg-[color:#161616] px-[16px] py-[24px] text-white">
          <div className="grid grid-cols-3 gap-[16px] pb-[40px]">
            {listObjPricing.map((objPricing, idxObjPricing) => {
              return (
                <div key={idxObjPricing} className="break-words text-center">
                  <div className="mb-[16px] text-[20px] font-medium leading-[24px] -tracking-[0.48px]">
                    {getTypeConvertedPricingToPublic(objPricing.type) +
                      ' ' +
                      objPricing.unit}
                  </div>
                  <div className="text-[22px] font-medium leading-[28px] -tracking-[0.64px]">
                    <span className="text-[16px] leading-[24px]">{`from `}</span>
                    {'$' + objPricing.priceUSD.toLocaleString()}
                    <span className="text-[14px] leading-[22px]">{' USD'}</span>
                  </div>
                  <div className="text-[16px] leading-[24px]">
                    {'Per ' + objPricing.unit}
                  </div>
                </div>
              );
            })}
          </div>
          {getListObjConvertedByTypeSupport(listObjPricing).map(
            (objRow, idxObjRow) => {
              return (
                <div
                  key={idxObjRow}
                  className="grid grid-flow-row grid-rows-[1.25fr_1fr] gap-[16px] border-t-[1px] border-[#ffffff26] py-[16px]"
                >
                  <div className="my-[8px] text-[14px] font-bold leading-[22px] tracking-[0.8px]">
                    {objRow.typeSupport.toUpperCase().replaceAll('-', ' ')}
                  </div>
                  <div className="grid grid-flow-row grid-cols-3 items-center gap-[16px]">
                    {objRow.listSupport.map((objSupport, idxObjSupport) => {
                      const typeofSupport = typeof objSupport.support;
                      return (
                        <div
                          key={idxObjSupport}
                          className="flex items-center justify-center"
                        >
                          {typeofSupport === 'string' ? (
                            capitalizeLetterFirst(objSupport.support as string)
                          ) : typeofSupport === 'boolean' &&
                            objSupport.support ? (
                            <IconTick />
                          ) : (
                            <></>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
      <div className="bg-blur-circle-bottom-right"></div>
    </SectionWrapper>
  );
};

export default CmpContentPricing;
