import { FC } from 'react';
import tw from 'tailwind-styled-components';

const DivContainerCTAFixed = tw.div`
fixed inset-[16px_0%_auto] z-[1000] mx-auto flex justify-end desktop:block desktop:inset-[24px_0%_auto] w-[90%] max-w-[1360px]
`;

const BtnCTAFixed = tw.button`
static desktop:fixed right-[5vw] top-[16px] landscape:top-[18px] desktop:top-[24px] z-[500] flex py-[10px] landscape:py-[12px] px-[24px] items-center ease-[ease] rounded-[8px] border-[2px] border-black bg-[#0a0a0a] shadow-[2px_0_6px_0_rgba(0,0,0,0.1)] transition-all duration-[400ms] text-white text-[13px] landscape:text-[14px] font-bold tracking-[0.8px] uppercase [text-decoration:none]
`;

const CmpContainerCTAFixed: FC = () => {
  return (
    <DivContainerCTAFixed>
      <BtnCTAFixed type="button">
        <div>GET STARTED</div>
      </BtnCTAFixed>
    </DivContainerCTAFixed>
  );
};

export default CmpContainerCTAFixed;
