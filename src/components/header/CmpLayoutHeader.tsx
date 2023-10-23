import { FC } from 'react';
import { ReactComponent as IconHeaderLogo } from '../../assets/image/icon/icon-logo-header.svg';

const CmpLayoutHeader: FC = () => {
  return (
    <header className="relative flex h-[80px] w-full max-w-[1360px] items-center justify-between px-[5%]">
      <IconHeaderLogo />
    </header>
  );
};

export default CmpLayoutHeader;
