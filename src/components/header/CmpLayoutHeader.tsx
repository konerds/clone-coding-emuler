import { FC } from 'react';
import { ReactComponent as IconHeaderLogo } from '../../assets/image/icon/icon-logo-header.svg';

const CmpLayoutHeader: FC = () => {
  return (
    <>
      <header className="relative">
        <div className="relative z-[10] flex h-[80px] w-full max-w-[1360px] items-center justify-between px-[5%]">
          <IconHeaderLogo />
        </div>
        <button
          type="button"
          className="box-shadow-btn-ctx fixed right-[5%] top-[16px] z-[20] rounded-[8px] border-[2px] border-black bg-[#0a0a0a] px-[24px] py-[10px] transition-all duration-[400ms]"
        >
          <span className="text-[13px] font-bold leading-[20px] tracking-[0.8px] text-white">
            GET STARTED
          </span>
        </button>
      </header>
    </>
  );
};

export default CmpLayoutHeader;
