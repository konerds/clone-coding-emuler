import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { customRP } from '../../../utils';
import ImgBgGrainLatest from '../../../assets/image/img-bg-grain-latest.png';
import { listObjFAQ } from '../../../data';

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImgBgGrainLatest})`,
});
const SectionWrapper = tw.section`
relative bg-[size:300px_300px] bg-[position:0px_0px] py-[120px] max-desktop:py-[104px] max-tablet:py-[64px]
`;

const CmpContentFAQ: FC = () => {
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <div className="relative z-[10] px-[5%] py-[64px] text-center">
        <div className="mx-auto mb-[64px] flex flex-col items-center justify-center">
          <div className="mb-[24px] mt-[16px] text-[36px] font-medium leading-[44px] -tracking-[1.92px]">
            Frequently asked questions
          </div>
        </div>
        <div className="mb-[48px] max-w-[720px] [&>div:last-of-type]:border-b-[2px]">
          {listObjFAQ.map((objFAQ, idxObjFAQ) => {
            return (
              <div
                key={idxObjFAQ}
                className="-mb-[2px] border-t-[2px] border-[#161616] px-0 py-[24px]"
              >
                <div className="text-[24px] font-medium leading-[32px] -tracking-[0.48px]">
                  {objFAQ.question}
                </div>
                <div className="mb-[10px] mt-[24px] inline-block text-[16px] leading-[1.5] -tracking-[0.32px]">
                  {objFAQ.answer}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb-[16px] mt-[8px] text-[24px] font-medium leading-[32px] -tracking-[0.64px]">
          Have more questions?
        </div>
        <div className="mb-[40px] text-[18px] leading-[1.5] -tracking-[0.4px]">
          Just reach out, we're always around to answer any questions.
        </div>
        <button
          type="button"
          className="rounded-[8px] border-[2px] border-black bg-white px-[24px] py-[12px] text-[14px] font-bold leading-[20px] tracking-[0.8px]"
        >
          CONTACT US
        </button>
      </div>
      <div className="bg-blur-circle-bottom-right"></div>
    </SectionWrapper>
  );
};

export default CmpContentFAQ;
