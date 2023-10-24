import { FC, useState } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import ImgWithRelumeMobile from '../../../assets/image/img-with-relume-mobile.png';
import ImgWithoutRelumeMobile from '../../../assets/image/img-without-relume-mobile.png';

const CmpContentComparison: FC = () => {
  const [isWithRelume, setIsWithRelume] = useState(true);
  return (
    <section className="relative px-[5%] py-[64px]">
      <div className="bg-blur-circle-middle-left"></div>
      <div className="relative z-[10]">
        <div className="mb-[48px] text-center">
          <div className="mb-[24px] mt-[16px] text-[36px] font-medium leading-[44px] tracking-tight">
            Don't compromise your design with average web development
          </div>
          <div className="mb-[10px] inline-block text-[18px] leading-[1.5] tracking-tight">
            You've gone to all this effort to create your beautiful design -
            don't compromise with average development. We guarantee pixel
            perfect design and smooth interactions that delight your users.
          </div>
        </div>
        <div className="mb-[48px] flex items-center justify-evenly border-black text-[14px] font-bold leading-[20px] text-[#0a0a0a]">
          <button
            type="button"
            className={`mr-[32px] py-[8px]${
              isWithRelume
                ? ' border-b-[2px]'
                : ' border-b-[2px] border-transparent'
            }`}
            onClick={() => {
              setIsWithRelume(true);
            }}
          >
            WITH RELUME
          </button>
          <button
            type="button"
            className={`py-[8px]${
              !isWithRelume
                ? ' border-b-[2px]'
                : ' border-b-[2px] border-transparent'
            }`}
            onClick={() => {
              setIsWithRelume(false);
            }}
          >
            WITHOUT RELUME
          </button>
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
    </section>
  );
};

export default CmpContentComparison;
