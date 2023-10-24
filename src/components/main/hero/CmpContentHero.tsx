import { FC } from 'react';
import { ReactComponent as IconArrowDownNatural } from '../../../assets/image/icon/icon-arrow-down-natural.svg';

const CmpContentHero: FC = () => {
  return (
    <section className="relative px-[5%] pb-[64px] pt-[40px]">
      <div className="bg-blur-circle-top-left-2"></div>
      <div className="relative z-[10]">
        <div className="text-center text-[40px] leading-[48px] tracking-tight">
          Your designer's favourite web developer
        </div>
        <div className="mt-[24px] text-center text-[16px] leading-[26px] tracking-tight">
          Relume can build your Figma, Sketch or Adobe XD website design pixel
          perfect on Webflow.
        </div>
        <div className="mt-[42.61px] flex flex-col items-center">
          <div className="text-[11px] font-semibold">SEE FOR YOURSELF</div>
          <IconArrowDownNatural className="mt-[15.89px]" />
        </div>
        <iframe
          className="mt-[56px] rounded-lg border-[2px] border-black"
          width="100%"
          height="390.29px"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQ5dHDQBsXPO21b03SHuq6Z%2FRelume-Website-Design%3Fnode-id%3D0%253A1"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default CmpContentHero;
