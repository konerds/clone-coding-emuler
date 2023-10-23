import { FC } from 'react';
import { ReactComponent as IconHeaderLogo } from '../../assets/image/icon/icon-logo-header.svg';

const CmpLayoutHeader: FC = () => {
  return (
    <header className="relative z-[20] flex h-[80px] w-full max-w-[1360px] items-center justify-between">
      <IconHeaderLogo />
      <button
        type="button"
        className="fixed right-[5%] h-[48px] w-[144px] rounded-lg bg-black text-[13px] tracking-wide text-white"
      >
        GET STARTED
      </button>
    </header>
  );
};

export default CmpLayoutHeader;
