import { FC } from 'react';

const CmpContentContact: FC = () => {
  return (
    <section className="relative">
      <div className="bg-[#0a0a0a] py-[64px] text-center">
        <div className="mb-[40px] px-[5%] text-white">
          <div className="mb-[16px] mt-[16px] text-[36px] font-medium leading-[44px] -tracking-[1.92px]">
            Get started
          </div>
          <div className="mb-[10px] inline-block text-[18px] leading-[1.5] -tracking-[0.4px]">
            It only takes a few minutes to kick off a project. Fill in the
            details below and we'll be in touch.
          </div>
        </div>
        <div className="min-h-[600px]"></div>
      </div>
    </section>
  );
};

export default CmpContentContact;
