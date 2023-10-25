import { FC, useState } from 'react';
import tw from 'tailwind-styled-components';
import { customRP } from '../../../utils';
import ImgBgGrainLatest from '../../../assets/image/img-bg-grain-latest.png';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import ImgWithRelumeMobile from '../../../assets/image/img-with-relume-mobile.png';
import ImgWithoutRelumeMobile from '../../../assets/image/img-without-relume-mobile.png';

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImgBgGrainLatest})`,
});
const SectionWrapper = tw.section`
relative bg-[size:300px_300px] bg-[position:0px_0px] py-[120px] max-desktop:py-[104px] max-tablet:py-[64px]
`;

const CmpContentComparison: FC = () => {
  const [isWithRelume, setIsWithRelume] = useState(true);
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <div className="bg-blur-circle-middle-left"></div>
      <div className="relative z-[10] px-[5%] py-[64px]">
        <div className="mb-[48px] text-center">
          <div className="mb-[24px] mt-[16px] text-[36px] font-medium leading-[44px] -tracking-[1.92px]">
            Don't compromise your design with average web development
          </div>
          <div className="mb-[10px] inline-block text-[18px] leading-[1.5] -tracking-[0.4px]">
            You've gone to all this effort to create your beautiful design -
            don't compromise with average development. We guarantee pixel
            perfect design and smooth interactions that delight your users.
          </div>
        </div>
        <div className="mb-[48px] flex items-center justify-evenly text-[14px] font-bold leading-[20px] text-[#0a0a0a] [&>button:nth-child(1)]:mr-[32px]">
          {[true, false].map((flagBtn, idxBtn) => {
            return (
              <button
                key={idxBtn}
                type="button"
                className={`py-[8px]${
                  flagBtn === isWithRelume
                    ? ' border-b-[2px] border-[#161616]'
                    : ' border-b-[2px] border-transparent'
                }`}
                onClick={() => {
                  setIsWithRelume(flagBtn);
                }}
              >
                <span className="text-[14px] font-bold leading-[20px] tracking-[0.28px]">
                  {flagBtn ? 'WITH RELUME' : 'WITHOUT RELUME'}
                </span>
              </button>
            );
          })}
        </div>
        <ReactCSSTransitionReplace
          transitionName="transition-fade-wait"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={500}
        >
          <img
            key={isWithRelume ? 'with' : 'without'}
            src={isWithRelume ? ImgWithRelumeMobile : ImgWithoutRelumeMobile}
            alt={isWithRelume ? 'with relume' : 'without relume'}
          />
        </ReactCSSTransitionReplace>
      </div>
    </SectionWrapper>
  );
};

export default CmpContentComparison;
