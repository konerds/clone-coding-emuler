import { FC } from 'react';
import tw from 'tailwind-styled-components';

const DivContainer = tw.div`
fixed inset-[16px_0%_auto] z-[1000] mx-auto flex w-[90%] max-w-[1360px] justify-end desktop:inset-[24px_0%_auto] desktop:block
`;

const ButtonCTAFixed = tw.button`
static right-[5vw] top-[16px] z-[500] flex items-center rounded-[8px] border-[2px] border-black bg-[color:#0a0a0a] px-[24px] py-[10px] text-[13px] font-bold uppercase tracking-[0.8px] text-white shadow-[2px_0_6px_0_rgba(0,0,0,0.1)] transition-all duration-[400] ease-[ease] [text-decoration:none] mobile-landscape:top-[18px] mobile-landscape:py-[12px] mobile-landscape:text-[14px] desktop:fixed desktop:top-[24px]
`;

const CmpGetStartedCTAFixed: FC = () => {
  return (
    <DivContainer>
      <ButtonCTAFixed type="button">
        <div>GET STARTED</div>
      </ButtonCTAFixed>
    </DivContainer>
  );
};

export default CmpGetStartedCTAFixed;
