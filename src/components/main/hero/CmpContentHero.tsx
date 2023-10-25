import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { ReactComponent as ImgQuoteHeroMobile } from '../../../assets/image/img-quote-hero-mobile.svg';

const H1HeroHeading = tw.h1`
mb-[16px]
mt-[8px]
text-center
text-[40px]
font-medium
leading-[48px]
-tracking-[2.4px]
`;

const CmpContentHero: FC = () => {
  return (
    <section className="relative">
      <div className="bg-blur-circle-top-left-2"></div>
      <div className="relative z-[10] flex flex-col items-center px-[5%] pb-[64px] pt-[40px]">
        <H1HeroHeading>Your designer's favourite web developer</H1HeroHeading>
        <div className="max-w-[560px] text-center text-[18px] leading-[1.5] -tracking-[0.4px]">
          Relume can build your Figma, Sketch or Adobe XD website design pixel
          perfect on Webflow.
        </div>
        <div className="mt-[40px] flex items-start justify-center">
          <ImgQuoteHeroMobile className="w-[128px]" />
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
