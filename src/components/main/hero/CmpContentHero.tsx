import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { customRP } from '../../../utils';
import ImgBgGrainLatest from '../../../assets/image/img-bg-grain-latest.png';
import ImgQuoteHeroMobile from '../../../assets/image/img-quote-hero-mobile.svg';
import ImgQuoteHero from '../../../assets/image/img-quote-hero.svg';
import IconUnderlineLong from '../../../assets/image/icon/icon-underline-long.svg';

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImgBgGrainLatest})`,
});
const SectionWrapper = tw.section`
relative bg-[size:300px_300px] bg-[position:0px_0px] pb-[64px] pt-[120px] tablet:pb-[104px] tablet:pt-[120px] desktop:pb-[120px] desktop:pt-[140px]
`;

const DivContainer = tw.div`
relative z-[2] mx-auto block w-[90%] max-w-[1360px]
`;

const ImageQuoteHero = tw.img`
absolute inset-[auto_0%_1%_37%] opacity-100 max-desktop:inset-[30%_auto_auto_0%] max-desktop:hidden desktop-larger:bottom-[2%]
`;

const DivLayoutGrid = tw.div`
grid gap-[16px] [grid-template-columns:1fr_1fr] [grid-template-rows:auto] max-desktop:gap-y-[56px] max-desktop:[grid-template-columns:1fr]
`;

const DivWrapperContentHero = tw.div`
self-center max-desktop:flex max-desktop:flex-col max-desktop:items-center max-desktop:text-center
`;

const H1HeadingHero = tw.h1`
relative max-w-[640px] max-desktop:text-[64px] max-desktop:leading-[72px] max-tablet:text-[48px] max-tablet:leading-[56px] max-mobile-landscape:mb-[16px] max-mobile-landscape:mt-[8px] max-mobile-landscape:text-[40px] max-mobile-landscape:leading-[48px] desktop-larger:static desktop-larger:mb-[32px] desktop-larger:max-w-[720px]
`;

const customRPSpanWithUnderline = customRP({
  backgroundImage: `url(${IconUnderlineLong})`,
});
const SpanWithUnderline = tw.span`
inline-block bg-contain bg-[position:50%_100%] bg-no-repeat px-[2px] pb-[8px] pt-[4px] max-desktop:pb-[4px] max-desktop:pt-[2px] max-tablet:pb-[4px] max-tablet:pt-[2px]
`;

const ParagraphContentHero = tw.p`
mb-[40px] max-w-[560px] text-[20px] -tracking-[0.4px] max-desktop:mb-0 max-desktop:text-[18px]
`;

const BtnGetStarted = tw.button`
inline-block cursor-pointer rounded-[8px] border-[2px] border-black bg-black px-[32px] py-[16px] text-[16px] font-bold uppercase leading-[inherit] tracking-[0.8px] text-white transition-all ease-[ease] [text-decoration:none] max-desktop:hidden max-tablet:py-[14px] max-tablet:text-[15px]
`;

const ImageQuoteHeroMobile = tw.img`
absolute inset-[auto_0%_1%_37%] hidden max-desktop:static max-desktop:inset-[30%_auto_auto_0%] max-desktop:left-auto max-desktop:top-auto max-desktop:mt-[40px] max-desktop:block max-desktop:max-w-full max-tablet:top-[32%] max-tablet:w-[128px] max-mobile-landscape:top-[40%] desktop-larger:bottom-[2%]
`;

const DivWrapperEmbedFigma = tw.div`
relative h-[560px] w-full items-center justify-center overflow-hidden rounded-[16px] border-[2px] border-[#161616] max-desktop:max-w-none max-tablet:h-[480px] max-mobile-landscape:h-[360px]
`;

const DivEmbedFigma = tw.div`
h-full w-full
before:table before:[content:"_"] before:[grid-column-end:2] before:[grid-column-start:1] before:[grid-row-end:2] before:[grid-row-start:1]
`;

const DivBlurCircle = tw.div`
max-desktop:[-top-[10%]] max-desktop:[-right-[5%]] absolute inset-[-5%_auto_auto_-5%] -z-[1] block h-[440px] w-[440px] rounded-[500px] bg-[image:linear-gradient(132deg,#ff7448_27%,#ff4848_50%,#6248ff_79%)] opacity-[0.97] [filter:blur(64px)_blur(64px)] max-desktop:h-[400px] max-desktop:w-[400px] max-desktop:bg-[image:linear-gradient(285deg,#ff7448_29%,#ff4848_58%,#6248ff_80%)] max-desktop:opacity-[0.7] max-desktop:[filter:blur(68px)] max-tablet:h-[320px] max-tablet:w-[320px] max-tablet:opacity-[0.9] max-tablet:[filter:blur(64px)] max-mobile-landscape:-right-[20%] max-mobile-landscape:h-[280px] max-mobile-landscape:w-[280px]
`;

const CmpContentHero: FC = () => {
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <DivContainer>
        <ImageQuoteHero
          loading="lazy"
          src={ImgQuoteHero}
          alt="See for yourself!"
        />
        <DivLayoutGrid>
          <DivWrapperContentHero>
            <H1HeadingHero>
              Your designer’s{' '}
              <SpanWithUnderline style={customRPSpanWithUnderline}>
                favourite
              </SpanWithUnderline>{' '}
              web developer
            </H1HeadingHero>
            <ParagraphContentHero>
              Relume can build your Figma, Sketch or Adobe XD website design
              pixel perfect on Webflow.
            </ParagraphContentHero>
            <BtnGetStarted>get started</BtnGetStarted>
            <ImageQuoteHeroMobile
              loading="lazy"
              src={ImgQuoteHeroMobile}
              alt="See for yourself!"
            />
          </DivWrapperContentHero>
          <DivWrapperEmbedFigma>
            <DivEmbedFigma>
              {/* <iframe
                className="[border:0px_solid_#0000001a]"
                width="100%"
                height="100%"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQ5dHDQBsXPO21b03SHuq6Z%2FRelume-Website-Design%3Fnode-id%3D0%253A1"
                allowFullScreen
              ></iframe> */}
            </DivEmbedFigma>
          </DivWrapperEmbedFigma>
        </DivLayoutGrid>
      </DivContainer>
      <DivBlurCircle></DivBlurCircle>
    </SectionWrapper>
  );
};

export default CmpContentHero;
