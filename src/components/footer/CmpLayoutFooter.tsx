import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { ReactComponent as IconFooterLogo } from '../../assets/image/icon/icon-logo-footer.svg';

const FooterWrapper = tw.section`
relative z-0 bg-[#0a0a0a] py-[40px]
`;

const CmpLayoutFooter: FC = () => {
  return (
    <FooterWrapper>
      <div className="relative z-[10] bg-[#0a0a0a] text-center text-white">
        <div className="px-[5%] py-[40px]">
          <div className="flex items-center justify-between">
            <IconFooterLogo />
            <span className="text-[16px] leading-[1.3]">hello@relume.io</span>
          </div>
          <div className="mt-[52px] leading-[1.5] -tracking-[0.32px] text-[#ffffffa6]">
            <div className="mb-[16px] text-[16px] underline decoration-[#ffffffa6]">
              Privacy Policy
            </div>
            <div className="mb-[10px] text-[14px]">
              © 2021, Relume. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default CmpLayoutFooter;
