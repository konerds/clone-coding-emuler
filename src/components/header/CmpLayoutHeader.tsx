import { FC } from 'react';
import { ReactComponent as IconHeaderLogo } from '../../assets/image/icon/icon-logo-header.svg';

const CmpLayoutHeader: FC = () => {
  return (
    <>
      <header className="relative">
        <div className="relative z-[10] flex h-[80px] w-full max-w-[1360px] items-center justify-between px-[5%]">
          <IconHeaderLogo />
        </div>
      </header>
    </>
  );
};

export default CmpLayoutHeader;
