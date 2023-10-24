import { FC } from 'react';

const CmpContentPricing: FC = () => {
  return (
    <section className="relative">
      <div className="bg-blur-circle-top-left"></div>
      <div className="px-[5%] py-[64px] text-center">
        <div className="relative z-[10]">
          <div className="mb-[48px]">
            <div className="mb-[24px] mt-[16px] text-[36px] font-medium leading-[44px] -tracking-[1.92px]">
              Pricing
            </div>
            <div className="-trackint-[0.4px] mb-[10px] inline-block text-[18px] leading-[1.5]">
              Here's what it will cost in per-page to convert your design to
              Webflow.
            </div>
          </div>
          <div className="min-h-[1000px] rounded-[16px] bg-[#161616] px-[16px] py-[24px]"></div>
        </div>
      </div>
      <div className="bg-blur-circle-bottom-right"></div>
    </section>
  );
};

export default CmpContentPricing;
