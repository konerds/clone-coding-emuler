import { FC } from 'react';
import { ReactComponent as IconFooterLogo } from '../../assets/image/icon/icon-logo-footer.svg';

const CmpLayoutFooter: FC = () => {
  return (
    <footer className="relative z-[10] bg-[#0a0a0a] text-center text-white">
      <div className="px-[5%] py-[40px]">
        <div className="flex items-center justify-between">
          <IconFooterLogo />
          <span className="text-[16px] leading-[1.3]">hello@relume.io</span>
        </div>
        <div className="mt-[52px] leading-[1.5] text-[#ffffffa6]">
          <div className="mb-[16px] text-[16px] underline decoration-[#ffffffa6]">
            Privacy Policy
          </div>
          <div className="mb-[10px] text-[14px]">
            © 2021, Relume. All Rights Reserved.
          </div>
        </div>
      </div>
      <div className="bg-[#1d1c1e] px-[5%] pb-[4rem] pt-[2rem] text-white">
        <div className="text-[14px] leading-[20px]">
          This cloneable was built in under 1.5 hours using the Relume Library
        </div>
        <button
          type="button"
          className="mt-[1.5rem] rounded-3xl border-[1px] border-white px-[1.5rem] py-[0.75rem] text-[0.875rem] leading-[20px]"
        >
          View Relume Library
        </button>
      </div>
    </footer>
  );
};

export default CmpLayoutFooter;
